# -*- coding: utf-8 -*-
# * Copyright (C) 2012-2014 Croissance Commune
# * Authors:
#       * Arezki Feth <f.a@majerti.fr>;
#       * Miotte Julien <j.m@majerti.fr>;
#       * TJEBBES Gaston <g.t@majerti.fr>
#
# This file is part of Autonomie : Progiciel de gestion de CAE.
#
#    Autonomie is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    Autonomie is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with Autonomie.  If not, see <http://www.gnu.org/licenses/>.
"""
    Models related to activities :

        Activity Types
        Activities
"""
import logging
import datetime

from sqlalchemy import (
    Table,
    Integer,
    Column,
    ForeignKey,
    String,
    Date,
    Text,
    Boolean,
    )
from sqlalchemy.orm import (
    deferred,
    relationship,
    backref,
    )


from autonomie.models.base import (
    DBBASE,
    default_table_args,
    )
from autonomie.models.node import Node


log = logging.getLogger(__name__)


ACTIVITY_PARTICIPANT = Table(
    "activity_participant",
    DBBASE.metadata,
    Column("activity_id", ForeignKey('activity.id')),
    Column("account_id", ForeignKey('accounts.id')),
    mysql_charset=default_table_args['mysql_charset'],
    mysql_engine=default_table_args['mysql_engine'])


STATUS_SEARCH = (
    ("all", u"Tous les rendez-vous", ),
    ("planned", u"Planifiés", ),
    ("absent", u"Participants absents", ),
    ("excused", u"Participants excusés", ),
    ("closed", u"Participants présents", ),
    )

STATUS = (
    ("closed", u"Participant(s) présents"),
    ("excused", u"Participant(s) excusés"),
    ("absent", u"Participant(s) absents"),
    )


class Event(Node):
    """
        An event model
    """
    __tablename__ = 'event'
    __table_args__ = default_table_args
    __mapper_args__ = {'polymorphic_identity': 'event'}
    id = Column(Integer, ForeignKey('node.id'), primary_key=True)
    date = Column(Date, default=datetime.date.today)
    status = Column(String(15), default='planned')


class Activity(Event):
    """
        An activity model
    """
    __tablename__ = 'activity'
    __table_args__ = default_table_args
    __mapper_args__ = {'polymorphic_identity': 'activity'}
    id = Column(Integer, ForeignKey('event.id'), primary_key=True)
    conseiller_id = Column(ForeignKey('accounts.id'))
    type_id = Column(ForeignKey('activity_type.id'))
    action_id = Column(ForeignKey('activity_action.id'))
    subaction_id = Column(ForeignKey('activity_action.id'))
    mode = Column(String(100))
    # Libellé pour la sortie pdf
    action_label = Column(String(125), default="")
    subaction_label = Column(String(125), default="")
    # Champ text multiligne pour les activités
    point = deferred(Column(Text()), group='edit')
    objectifs = deferred(Column(Text()), group='edit')
    action = deferred(Column(Text()), group='edit')
    documents = deferred(Column(Text()), group='edit')
    notes = deferred(Column(Text()), group='edit')

    type_object = relationship(
            "ActivityType",
            primaryjoin="Activity.type_id==ActivityType.id",
            uselist=False,
            foreign_keys=type_id)
    conseiller = relationship(
            "User",
            primaryjoin="User.id==Activity.conseiller_id",
            backref=backref("managed_activities", order_by="Activity.date")
            )
    participants = relationship(
            "User",
            secondary=ACTIVITY_PARTICIPANT,
            backref="activities",
            )
    action_label_obj = relationship(
            "ActivityAction",
            primaryjoin="Activity.action_id==ActivityAction.id",
            )
    subaction_label_obj = relationship(
            "ActivityAction",
            primaryjoin="Activity.subaction_id==ActivityAction.id",
            )

    @property
    def action_label(self):
        if self.action_label_obj is not None:
            return self.action_label_obj.label
        else:
            return ""

    @property
    def subaction_label(self):
        if self.subaction_label_obj is not None:
            return self.subaction_label_obj.label
        else:
            return ""


class ActivityType(DBBASE):
    __tablename__ = 'activity_type'
    __table_args__ = default_table_args
    id = Column(Integer, primary_key=True)
    label = Column(String(100))
    active = Column(Boolean(), default=True)


class ActivityMode(DBBASE):
    __tablename__ = 'activity_modes'
    __table_args__ = default_table_args
    id = Column(Integer, primary_key=True)
    label = Column(String(100))


class ActivityAction(DBBASE):
    __tablename__ = 'activity_action'
    __table_args__ = default_table_args
    id = Column(Integer, primary_key=True)
    label = Column(String(100))
    active = Column(Boolean(), default=True)
    parent_id = Column(ForeignKey("activity_action.id"))
    children = relationship(
        "ActivityAction",
        primaryjoin="ActivityAction.id==ActivityAction.parent_id",
        backref=backref("parent", remote_side=[id]),
        cascade="all",
        )
