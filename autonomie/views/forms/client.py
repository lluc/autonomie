# -*- coding: utf-8 -*-
# * File Name :
#
# * Copyright (C) 2010 Gaston TJEBBES <g.t@majerti.fr>
# * Company : Majerti ( http://www.majerti.fr )
#
#   This software is distributed under GPLV3
#   License: http://www.gnu.org/licenses/gpl-3.0.txt
#
# * Creation Date : 10-04-2012
# * Last Modified :
#
# * Project :
#
"""
    Client handling forms schemas
"""
import colander
import logging

from deform import widget

from autonomie.models import DBSESSION
from autonomie.models.model import Client
from .utils import deferred_edit_widget
from .utils import get_mail_input

log = logging.getLogger(__name__)

@colander.deferred
def unique_ccode(node, value):
    """
        Test customer code unicity
    """
    #Test unicity
    db = DBSESSION()
    result = db.query(Client).filter_by(code=value).first()
    if result:
        message = u"Le code '{0}' n'est pas disponible.".format(
                                                    value)
        raise colander.Invalid(node, message)

class ClientSchema(colander.MappingSchema):
    """
        Schema for customer insertion
    """
    id = colander.SchemaNode(colander.String(),
                                widget=deferred_edit_widget,
                                title=u'Code',
                                validator=colander.Length(4))
    name = colander.SchemaNode(colander.String(),
                            title=u"Nom de l'entreprise",
                            validator=colander.Length(max=255))
    contactLastName = colander.SchemaNode(colander.String(),
                            title=u'Nom du contact principal',
                            validator=colander.Length(max=255))
    contactFirstName = colander.SchemaNode(colander.String(),
                        title=u"Prénom du contact principal",
                        missing=u"",
                        validator=colander.Length(max=255))
    email = get_mail_input( missing=u'')
    phone = colander.SchemaNode(colander.String(),
                                title=u'Téléphone',
                                missing=u'',
                                validator=colander.Length(max=50))
    address = colander.SchemaNode(colander.String(),
                    title=u'Adresse',
                    missing=u'',
                    validator=colander.Length(max=255))
    zipCode = colander.SchemaNode(colander.String(),
                    title=u'Code postal',
                    missing=u'',
                    validator=colander.Length(max=20))
    city = colander.SchemaNode(colander.String(),
                    title=u'Ville',
                    missing=u'',
                    validator=colander.Length(max=255))
    country = colander.SchemaNode(colander.String(),
                title=u"Pays",
                missing=u'France',
                validator=colander.Length(max=255)
                )
    intraTVA = colander.SchemaNode(colander.String(),
                    title=u"TVA intracommunautaire",
                    validator=colander.Length(max=50),
                    missing=u'')
    comments = colander.SchemaNode(colander.String(),
            widget=widget.TextAreaWidget(cols=80, rows=4),
            title=u'Commentaires',
            missing=u'')
