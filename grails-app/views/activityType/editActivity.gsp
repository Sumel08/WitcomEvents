<!DOCTYPE html>
<html>
    <head>
        <title>Editing ${activity.name}</title>
        <meta name="layout" content="witcom" />

        <link rel="stylesheet" type="text/css" href="/assets/styles.css"/>

        <link rel="stylesheet" type="text/css" href="/assets/styles.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/bootstrap-formhelpers.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/bootstrap-select.min.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/bootstrap-tags.css"/>
        <link rel="stylesheet" type="text/css" href="/assets/forms.css"/>

        <link href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" rel="stylesheet">

    </head>
    <body>

        <div class="portlet light">
            <div class="portlet-title tabbable-line">
                <div class="caption caption-md">
                    <i class="icon-globe theme-font hide"></i>
                    <span class="caption-subject font-blue-madison bold uppercase">Información</span>
                </div>
                <ul class="nav nav-tabs">
                    <li class="active">
                        <a href="#tab_1_1" data-toggle="tab">General Info</a>
                    </li>

                </ul>
            </div>
            <div class="portlet-body">
                <div class="tab-content">
                    <!-- PERSONAL INFO TAB -->
                    <div class="tab-pane active" id="tab_1_1">
                        <!-- BEGIN FORM -->
                        <div class="content-box-large">
                            <div class="panel-heading">
                                <div class="panel-title">Horizontal Form </div>
                                
                                <div class="panel-options">
                                  <a href="#" data-rel="collapse"><i class="glyphicon glyphicon-refresh"></i></a>
                                  <a href="#" data-rel="reload"><i class="glyphicon glyphicon-cog"></i></a>
                                </div>
                            </div>
                            <div class="panel-body">
                                <g:form name="activityType" action="updateActivity" enctype="multipart/form-data">

                                    <div class="form-group">
                                      <label for="eventName" class="col-sm-2 control-label" style="margin-top: 10px;">Name</label>
                                      <div class="col-sm-10" style="margin-top: 10px;">
                                        <input type="text" class="form-control" id="name" name="name" placeholder="Activity Type Name" value="${activity.name}">
                                      </div>
                                    </div>

                                    <div class="form-group">
                                      <label class="col-sm-2 control-label" style="margin-top: 10px;">Description</label>
                                      <div class="col-sm-10" style="margin-top: 10px;">
                                        <textarea class="form-control" id="description" name="description" placeholder="Activity Description" rows="3" >${activity.description}</textarea>
                                      </div>
                                    </div>

                                    <div class="form-group">
                                      <label class="col-sm-2 control-label" style="margin-top: 10px;">Show in app</label>
                                      <div class="col-sm-10 " style="margin-top: 10px;">
                                        <g:if test="${activity.show}">
                                            <input type="checkbox" value="show" name="show_app" checked>
                                        </g:if>
                                        <g:else>
                                            <input type="checkbox" value="show" name="show_app">
                                        </g:else>

                                      </div>
                                    </div>

                                    <g:hiddenField name="idActivity" id="idActivity" value="${activity.id}"/>

                                  <div class="form-group">
                                    <div class="col-sm-offset-2 col-sm-10" style="margin-top: 10px;">
                                      <button type="submit" class="btn btn-primary">Update</button>
                                    </div>
                                  </div>
                                </g:form>
                            </div>
                        </div>
                        <!-- END FORM -->
                    </div>

                    <div class="tab-pane " id="tab_1_2">
                        <!-- BEGIN FORM -->
                        
                        <!-- END FORM -->
                    </div>

                </div>

            </div>
        </div>

        <script src="https://code.jquery.com/jquery.js" type="text/javascript"></script>

        <script type="text/javascript">
            $(document).ready ( function(){
                //setDate();
            });

            
        </script>

    </body>
</html>