<%inherit file="base.mako"></%inherit>
<%namespace file="/base/pager.mako" import="pager"/>
<%namespace file="/base/pager.mako" import="sortable"/>
<%namespace file="/base/utils.mako" import="searchform"/>
<%namespace file="/base/utils.mako" import="urlbuild" />
<%block name='content'>
<table class="table table-striped table-condensed">
    <thead>
        <tr>
            <th>${sortable("Code", "code")}</th>
            <th>${sortable("Nom", "name")}</th>
            <th>Client</th>
            <th>Actions</th>
        </tr>
    </thead>
    <tbody>
        % if projects:
            % for project in projects:
                <tr class='tableelement' id="${project.id}">
                    <td onclick="document.location='${request.route_path("company_project", id=project.id)}'" class='rowlink'>${project.code}</td>
                    <td onclick="document.location='${request.route_path("company_project", id=project.id)}'" class='rowlink'>${project.name}</td>
                    <td onclick="document.location='${request.route_path("company_project", id=project.id)}'" class='rowlink'>${project.client.name}</td>
                    <td>
                        <div class='btn-group'>
                            <a class='btn' href='${request.route_path("company_project", id=project.id)}'>
                                <span class='ui-icon ui-icon-pencil'></span>
                                Voir
                            </a>
                            <a class='btn' href='${request.route_path("estimations", id=project.id)}'>
                                <span class='ui-icon ui-icon-plusthick'></span>
                                Devis
                            </a>
                            <a class='btn' href='${request.route_path("invoices", id=project.id)}'>
                                <span class='ui-icon ui-icon-plusthick'></span>
                                Facture
                            </a>
                            %if request.GET.get('archived') != '1':
                                <a class='btn'
                                    href='${request.route_path("company_project", id=project.id, _query=dict(action="archive"))}'
                                    onclick="return confirm('Êtes-vous sûr de vouloir archiver ce projet ?');">
                                    <span class='ui-icon ui-icon-folder-collapsed'></span>
                                    Archiver
                                </a>
                            %elif project.is_deletable():
                                <a class='btn'
                                    href='${request.route_path("company_project", id=project.id, _query=dict(action="delete"))}'
                                    onclick="return confirm('Êtes-vous sûr de vouloir supprimer définitivement ce projet ?');">
                                    <span class='ui-icon ui-icon-trash'></span>
                                    Supprimer
                                </a>
                            %endif
                        </div>
                    </td>
                </tr>
            % endfor
        % else:
            <tr>
                <td colspan='6'>
                    Aucun projet n'a été créé pour l'instant
                </td>
            </tr>
        % endif
    </tbody>
</table>
${pager(projects)}
% if html_form is not UNDEFINED:
    <div id='addform' style="overflow:hidden;">
        ${html_form|n}
    </div>
% endif
</%block>
<%block name='footerjs'>
% if html_form is not UNDEFINED:
    $( function() {
    $("#addform").dialog({ autoOpen: false,
    modal:true,
    width:"auto",
    height:"auto",
    autoResize:true,
    title:"Ajouter un Projet"
    })
    });
% endif
</%block>

