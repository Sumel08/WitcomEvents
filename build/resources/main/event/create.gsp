<!DOCTYPE html>
<html>
<head>
	<title>New Event</title>

	<link rel="stylesheet" type="text/css" href="/assets/css/bootstrap.min.css"/>
	<link rel="stylesheet" type="text/css" href="/assets/styles.css"/>
	<link rel="stylesheet" type="text/css" href="/assets/styles.css"/>
    <link rel="stylesheet" type="text/css" href="/assets/bootstrap-formhelpers.min.css"/>
    <link rel="stylesheet" type="text/css" href="/assets/bootstrap-tags.css"/>
    <link rel="stylesheet" type="text/css" href="/assets/forms.css"/>

</head>
<body>

	<div class="container">

		<div class="row">
			<div class="col-md-offset-2 col-md-8">

				<div class="row" style="text-align: center;">

					<h1>WITCOM EVENTS <small>CREATE NEW EVENT</small></h1>

				</div>

				<div class="content-box-large">
	  				<div class="panel-heading">
			            <div class="panel-title">New Event</div>
			          
			            
			        </div>
	  				<div class="panel-body">
	  					<g:form name="event" action="save" >

	  						<div class="col-md-12">
                                <div class="form-group">
                                  <label for="eventName" class="col-sm-2 control-label" style="margin-top: 10px;">Event Name</label>
                                  <div class="col-sm-10" style="margin-top: 10px;">
                                    <input type="text" class="form-control" id="eventName" name="eventName" placeholder="Event Name" required>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                  <label for="eventCode" class="col-sm-2 control-label" style="margin-top: 10px;">Event Code</label>
                                  <div class="col-sm-10" style="margin-top: 10px;">
                                    <input type="text" class="form-control" id="eventCode" name="eventCode" placeholder="Event Code" required>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                <label for="startDate" class="col-sm-2 control-label" style="margin-top: 10px;">Start Date</label>
                                <div class="col-sm-10" style="margin-top: 10px;">
                                  <input type="datetime-local" class="form-control" id="startDate" name="startDate" placeholder="Start Date" >
                                </div>
                              </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                <label for="endDate" class="col-sm-2 control-label" style="margin-top: 10px;">End Date</label>
                                <div class="col-sm-10" style="margin-top: 10px;">
                                  <input type="datetime-local" class="form-control" id="endDate" name="endDate" placeholder="End Date" >
                                </div>
                              </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                  <label for="username" class="col-sm-2 control-label" style="margin-top: 10px;">Username</label>
                                  <div class="col-sm-10" style="margin-top: 10px;">
                                    <input type="text" class="form-control" id="username" name="username" placeholder="Username" required>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                  <label for="password" class="col-sm-2 control-label" style="margin-top: 10px;">Password</label>
                                  <div class="col-sm-10" style="margin-top: 10px;">
                                    <input type="password" class="form-control" id="password" name="password" placeholder="Password" required>
                                  </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="form-group">
                                  <label for="email" class="col-sm-2 control-label" style="margin-top: 10px;">Email</label>
                                  <div class="col-sm-10" style="margin-top: 10px;">
                                    <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
                                  </div>
                                </div>
                            </div>

						  <div class="form-group">
						    <div class="col-sm-offset-2 col-sm-10">
						      <button type="submit" class="btn btn-primary">Sign in</button>
						    </div>
						  </div>

						</g:form>
	  				</div>
	  			</div>
			</div>
		</div>
	</div>
</body>
</html>