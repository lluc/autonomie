var templates = {};
templates.expenseForm = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<form id='expenseForm' class='form' action='#' onsubmit='return false;'>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='category'>Catégorie de frais</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);if(_.s(_.f("category_options",c,p,1),c,p,0,218,349,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<label class=\"radio\">");_.b("\n" + i);_.b("<input type='radio' name='category' value='");_.b(_.v(_.f("value",c,p,0)));_.b("' ");if(_.s(_.f("selected",c,p,1),c,p,0,308,315,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("checked");});c.pop();}_.b("> ");_.b(_.v(_.f("label",c,p,0)));_.b("\n" + i);_.b("</label>");_.b("\n");});c.pop();}_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='type_id'>Type de frais</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<select class='input-xlarge' name='type_id'>");_.b("\n" + i);if(_.s(_.f("type_options",c,p,1),c,p,0,566,654,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<option value='");_.b(_.v(_.f("value",c,p,0)));_.b("' ");if(_.s(_.f("selected",c,p,1),c,p,0,606,621,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("selected='true'");});c.pop();}_.b(">");_.b(_.v(_.f("label",c,p,0)));_.b("</option>");_.b("\n");});c.pop();}_.b("</select>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='altdate'>Date</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<input name=\"altdate\" class=\"input-small\" type=\"text\">");_.b("\n" + i);_.b("<input name=\"date\" class=\"input-small\" type=\"hidden\">");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='description'>Description</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<input type='text' class='input-xlarge' name='description' value='");_.b(_.v(_.f("description",c,p,0)));_.b("'/>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='ht'>Montant HT</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<div class=\"input-append\">");_.b("\n" + i);_.b("    <input type='text' class='input-small' name='ht' value='");_.b(_.v(_.f("ht",c,p,0)));_.b("' /><span class=\"add-on\">&euro;</span>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='tva'>Montant de la Tva</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<div class=\"input-append\">");_.b("\n" + i);_.b("<input type='text' class='input-small' name='tva' value='");_.b(_.v(_.f("tva",c,p,0)));_.b("' /><span class=\"add-on\">&euro;</span>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"form-actions\">");_.b("\n" + i);_.b("<button type=\"submit\" class=\"btn btn-primary\" name='submit'>Valider</button>");_.b("\n" + i);_.b("<button type=\"reset\" class=\"btn\" name=\"cancel\">Annuler</button>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</form>");return _.fl();;});
templates.expensetel = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<td colspan='3'>");_.b(_.v(_.f("typelabel",c,p,0)));_.b("</td>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,47,386,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<td><div class='control-group'><div class='controls'><input type='text' class='input-small' value='");_.b(_.v(_.f("ht",c,p,0)));_.b("' name='ht'/></div></div></td>");_.b("\n" + i);_.b("<td><div class='control-group'><div class='controls'><input type='text' class='input-small' value='");_.b(_.v(_.f("tva",c,p,0)));_.b("' name='tva'/></div></div></td>");_.b("\n" + i);_.b("<td><span class='total'>");_.b(_.t(_.f("total",c,p,0)));_.b("</span></td>");_.b("\n" + i);_.b("<td></td>");_.b("\n");});c.pop();}if(!_.s(_.f("edit",c,p,1),c,p,1,0,0,"")){_.b("<td>");_.b(_.v(_.f("ht",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("tva",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.t(_.f("total",c,p,0)));_.b("</td>");_.b("\n");};return _.fl();;});
templates.expenseKmList = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div>");_.b("\n" + i);_.b("\n" + i);_.b("    <table class=\"table table-striped table-bordered table-condensed\">");_.b("\n" + i);_.b("        <caption>");_.b("\n" + i);_.b("        Frais kilométriques liés au fonctionnement de l'entreprise");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,184,407,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <div style=\"display:inline-block\">");_.b("\n" + i);_.b("<a href=\"#kmlines/add\" class='btn visible-desktop hidden-tablet' title=\"Ajouter une ligne\"><i class='icon icon-plus-sign'></i>&nbsp;Ajouter</a>");_.b("\n" + i);_.b("            </div>");_.b("\n");});c.pop();}_.b("        </caption>");_.b("\n" + i);_.b("        <thead>");_.b("\n" + i);_.b("            <th>Date</th>");_.b("\n" + i);_.b("            <th>Type</th>");_.b("\n" + i);_.b("            <th class='span3'>Prestation</th>");_.b("\n" + i);_.b("            <th>Point de départ</th>");_.b("\n" + i);_.b("            <th>Point d'arrivée</th>");_.b("\n" + i);_.b("            <th>Kms</th>");_.b("\n" + i);_.b("            <th>Indemnités</th>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,702,744,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <th>Actions</th>");_.b("\n");});c.pop();}_.b("        </thead>");_.b("\n" + i);_.b("        <tbody class='internal'>");_.b("\n" + i);_.b("        </tbody>");_.b("\n" + i);_.b("        <tfoot>");_.b("\n" + i);_.b("            <tr>");_.b("\n" + i);_.b("                <td colspan='6'>Total</td>");_.b("\n" + i);_.b("                <td id='km_internal_total'></td>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,971,1014,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                <td></td>");_.b("\n");});c.pop();}_.b("            </tr>");_.b("\n" + i);_.b("        </tfoot>");_.b("\n" + i);_.b("    </table>");_.b("\n" + i);_.b("    <br/>");_.b("\n" + i);_.b("    <table class=\"table table-striped table-bordered table-condensed\">");_.b("\n" + i);_.b("        <caption>");_.b("\n" + i);_.b("            Frais kilométriques liés à l'activité");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,1242,1465,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <div style=\"display:inline-block\">");_.b("\n" + i);_.b("<a href=\"#kmlines/add\" class='btn visible-desktop hidden-tablet' title=\"Ajouter une ligne\"><i class='icon icon-plus-sign'></i>&nbsp;Ajouter</a>");_.b("\n" + i);_.b("            </div>");_.b("\n");});c.pop();}_.b("        </caption>");_.b("\n" + i);_.b("        <thead>");_.b("\n" + i);_.b("            <th>Date</th>");_.b("\n" + i);_.b("            <th>Type</th>");_.b("\n" + i);_.b("            <th class='span3'>Prestation</th>");_.b("\n" + i);_.b("            <th>Point de départ</th>");_.b("\n" + i);_.b("            <th>Point d'arrivée</th>");_.b("\n" + i);_.b("            <th>Kms</th>");_.b("\n" + i);_.b("            <th>Indemnités</th>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,1760,1802,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <th>Actions</th>");_.b("\n");});c.pop();}_.b("        </thead>");_.b("\n" + i);_.b("        <tbody class='activity'>");_.b("\n" + i);_.b("        </tbody>");_.b("\n" + i);_.b("        <tfoot>");_.b("\n" + i);_.b("            <tr>");_.b("\n" + i);_.b("                <td colspan='6'>Total</td>");_.b("\n" + i);_.b("                <td id='km_activity_total'></td>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,2029,2072,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("                <td></td>");_.b("\n");});c.pop();}_.b("            </tr>");_.b("\n" + i);_.b("        </tfoot>");_.b("\n" + i);_.b("    </table>");_.b("\n" + i);_.b("</div>");return _.fl();;});
templates.serverMessage = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div");_.b("\n" + i);if(_.s(_.f("error",c,p,1),c,p,0,15,77,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("class=\"alert alert-error\">");_.b("\n" + i);_.b("<i class=\"icon-warning-sign\"></i>");_.b("\n");});c.pop();}if(!_.s(_.f("error",c,p,1),c,p,1,0,0,"")){_.b("class=\"alert alert-success\">");_.b("\n" + i);_.b("<i class=\"icon-ok\"></i>");_.b("\n");};_.b("<button class=\"close\" data-dismiss=\"alert\" type=\"button\">×</button>");_.b("\n" + i);_.b(_.v(_.f("msg",c,p,0)));_.b("\n" + i);_.b("</div>");return _.fl();;});
templates.expenseKm = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<td>");_.b(_.v(_.f("altdate",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("typelabel",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("description",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("start",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("end",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("km",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.t(_.f("total",c,p,0)));_.b("</td>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,151,321,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<td><a class='btn' href='");_.b(_.v(_.f("edit_url",c,p,0)));_.b("' ><i class='icon icon-pencil'></i>&nbsp;Éditer</a>");_.b("\n" + i);_.b("<a class='btn remove'><i class='icon icon-remove-sign'></i>&nbsp;Supprimer</td>");_.b("\n");});c.pop();}return _.fl();;});
templates.holiday = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<td>");_.b(_.v(_.f("alt_start_date",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("alt_end_date",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td><a class='btn edit'><i class='icon icon-pencil'></i>&nbsp;Éditer</a><a class='btn remove'><i class='icon icon-remove-sign'></i>&nbsp;Supprimer</a></td>");return _.fl();;});
templates.holidayForm = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<form id='holidayForm' class='form' action='#' onsubmit='return false;'>");_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='alt_start_date'>Début</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("    <input name=\"alt_start_date\" class=\"input-small\" type=\"text\">");_.b("\n" + i);_.b("    <input name=\"start_date\" type=\"hidden\">");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='alt_end_date'>Fin</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("    <input name=\"alt_end_date\" class=\"input-small\" type=\"text\">");_.b("\n" + i);_.b("    <input name=\"end_date\" type=\"hidden\">");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"form-actions\">");_.b("\n" + i);_.b("<button type=\"submit\" class=\"btn btn-primary\" name='submit'>Valider</button>");_.b("\n" + i);_.b("<button type=\"reset\" class=\"btn\" name=\"cancel\">Annuler</button>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</form>");return _.fl();;});
templates.holidayList = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div>");_.b("\n" + i);_.b("    <table class=\"table table-bordered table-condensed\">");_.b("\n" + i);_.b("        <caption>");_.b("\n" + i);_.b("        Vos congés");_.b("\n" + i);_.b("            <div style=\"display:inline-block\">");_.b("\n" + i);_.b("                <a class='btn add' title=\"Déclarer un congés\"><i class='icon icon-plus-sign'></i>&nbsp;Ajouter</a>");_.b("\n" + i);_.b("            </div>");_.b("\n" + i);_.b("        </caption>");_.b("\n" + i);_.b("        <thead>");_.b("\n" + i);_.b("            <th>Date de début</th>");_.b("\n" + i);_.b("            <th>Date de fin</th>");_.b("\n" + i);_.b("            <th>Actions</th>");_.b("\n" + i);_.b("        </thead>");_.b("\n" + i);_.b("        <tbody>");_.b("\n" + i);_.b("        </tbody>");_.b("\n" + i);_.b("    </table>");_.b("\n" + i);_.b("</div>");return _.fl();;});
templates.expense = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<td>");_.b(_.v(_.f("altdate",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("typelabel",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("description",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("ht",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.v(_.f("tva",c,p,0)));_.b("</td>");_.b("\n" + i);_.b("<td>");_.b(_.t(_.f("total",c,p,0)));_.b("</td>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,146,320,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<td><a class='btn' href='");_.b(_.v(_.f("edit_url",c,p,0)));_.b("' ><i class='icon icon-pencil'></i>&nbsp;Éditer</a>");_.b("\n" + i);_.b("<a class='btn remove'><i class='icon icon-remove-sign'></i>&nbsp;Supprimer</a></td>");_.b("\n");});c.pop();}return _.fl();;});
templates.expenseKmForm = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<form id='expenseKmForm' class='form' action='#' onsubmit='return false;'>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='category'>Catégorie de frais</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);if(_.s(_.f("category_options",c,p,1),c,p,0,220,351,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<label class=\"radio\">");_.b("\n" + i);_.b("<input type='radio' name='category' value='");_.b(_.v(_.f("value",c,p,0)));_.b("' ");if(_.s(_.f("selected",c,p,1),c,p,0,310,317,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("checked");});c.pop();}_.b("> ");_.b(_.v(_.f("label",c,p,0)));_.b("\n" + i);_.b("</label>");_.b("\n");});c.pop();}_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='type_id'>Véhicule</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);if(_.s(_.f("type_options",c,p,1),c,p,0,517,647,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("<label class=\"radio\">");_.b("\n" + i);_.b("<input type='radio' name='type_id' value='");_.b(_.v(_.f("value",c,p,0)));_.b("' ");if(_.s(_.f("selected",c,p,1),c,p,0,606,613,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("checked");});c.pop();}_.b("> ");_.b(_.v(_.f("label",c,p,0)));_.b("\n" + i);_.b("</label>");_.b("\n");});c.pop();}_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='altdate'>Date</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<input name=\"altdate\" class=\"input-small\" type=\"text\">");_.b("\n" + i);_.b("<input name=\"date\" class=\"input-small\" type=\"hidden\">");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='start'>Point de départ</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<input type='text' class='input-medium' name='start' value='");_.b(_.v(_.f("start",c,p,0)));_.b("'/>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='end'>Point d'arrivée</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<input type='text' class='input-medium' name='end' value='");_.b(_.v(_.f("end",c,p,0)));_.b("'/>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"control-group\">");_.b("\n" + i);_.b("<label class=\"control-label\" for='ht'>Nombre de Kilomètres</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<div class=\"input-append\">");_.b("\n" + i);_.b("    <input type='text' class='input-small' name='km' value='");_.b(_.v(_.f("km",c,p,0)));_.b("' /><span class=\"add-on\">km</span>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class='control-group'>");_.b("\n" + i);_.b("<label class=\"control-label\" for='description'>Description</label>");_.b("\n" + i);_.b("<div class='controls'>");_.b("\n" + i);_.b("<input type='text' class='input-xlarge' name='description' value='");_.b(_.v(_.f("description",c,p,0)));_.b("' />");_.b("\n" + i);_.b("<span class=\"help-block\"> Le cas échéant, indiquer la prestation liée à ces frais</span>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("\n" + i);_.b("<div class=\"form-actions\">");_.b("\n" + i);_.b("<button type=\"submit\" class=\"btn btn-primary\" name='submit'>Valider</button>");_.b("\n" + i);_.b("<button type=\"reset\" class=\"btn\" name=\"cancel\">Annuler</button>");_.b("\n" + i);_.b("</div>");_.b("\n" + i);_.b("</form>");return _.fl();;});
templates.expenseList = new Hogan.Template(function(c,p,i){var _=this;_.b(i=i||"");_.b("<div>");_.b("\n" + i);_.b("<table class=\"table table-bordered table-condensed\">");_.b("\n" + i);_.b("    <caption>");_.b("\n" + i);_.b("    Frais liés au fonctionnement de l'entreprise");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,135,336,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <div style=\"display:inline-block\">");_.b("\n" + i);_.b("    <a href=\"#lines/add\" class='btn visible-desktop hidden-tablet' title=\"Ajouter une ligne\"><i class='icon icon-plus-sign'></i>&nbsp;Ajouter</a>");_.b("\n" + i);_.b("    </div>");_.b("\n");});c.pop();}_.b("    </caption>");_.b("\n" + i);_.b("    <thead>");_.b("\n" + i);_.b("        <th>Date</th>");_.b("\n" + i);_.b("        <th class='span3'>Type de frais</th>");_.b("\n" + i);_.b("        <th class='span3'>Description</th>");_.b("\n" + i);_.b("        <th>Montant HT</th>");_.b("\n" + i);_.b("        <th>Tva</th>");_.b("\n" + i);_.b("        <th>Total</th>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,572,610,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <th>Actions</th>");_.b("\n");});c.pop();}_.b("    </thead>");_.b("\n" + i);_.b("    <tbody class='internal'>");_.b("\n" + i);_.b("    </tbody>");_.b("\n" + i);_.b("    <tfoot>");_.b("\n" + i);_.b("        <tr>");_.b("\n" + i);_.b("            <td colspan='5'>Total</td>");_.b("\n" + i);_.b("            <td id='internal_total'></td>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,798,833,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <td></td>");_.b("\n");});c.pop();}_.b("        </tr>");_.b("\n" + i);_.b("    </tfoot>");_.b("\n" + i);_.b("</table>");_.b("\n" + i);_.b("<br />");_.b("\n" + i);_.b("<table class=\"table table-bordered table-condensed\">");_.b("\n" + i);_.b("    <caption>");_.b("\n" + i);_.b("    Frais liés à l'activité");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,994,1195,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("    <div style=\"display:inline-block\">");_.b("\n" + i);_.b("    <a href=\"#lines/add\" class='btn visible-desktop hidden-tablet' title=\"Ajouter une ligne\"><i class='icon icon-plus-sign'></i>&nbsp;Ajouter</a>");_.b("\n" + i);_.b("    </div>");_.b("\n");});c.pop();}_.b("    </caption>");_.b("\n" + i);_.b("    <thead>");_.b("\n" + i);_.b("        <th class='span3'>Type de frais</th>");_.b("\n" + i);_.b("        <th>Date</th>");_.b("\n" + i);_.b("        <th class='span3'>Description</th>");_.b("\n" + i);_.b("        <th>Montant HT</th>");_.b("\n" + i);_.b("        <th>Tva</th>");_.b("\n" + i);_.b("        <th>Total</th>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,1431,1465,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("        <th>Actions</th>");_.b("\n");});c.pop();}_.b("    </thead>");_.b("\n" + i);_.b("    <tbody class='activity'>");_.b("\n" + i);_.b("    </tbody>");_.b("\n" + i);_.b("    <tfoot>");_.b("\n" + i);_.b("        <tr>");_.b("\n" + i);_.b("            <td colspan='5'>Total</td>");_.b("\n" + i);_.b("            <td id='activity_total'></td>");_.b("\n" + i);if(_.s(_.f("edit",c,p,1),c,p,0,1653,1688,"{{ }}")){_.rs(c,p,function(c,p,_){_.b("            <td></td>");_.b("\n");});c.pop();}_.b("        </tr>");_.b("\n" + i);_.b("    </tfoot>");_.b("\n" + i);_.b("</table>");_.b("\n" + i);_.b("</div>");return _.fl();;});
