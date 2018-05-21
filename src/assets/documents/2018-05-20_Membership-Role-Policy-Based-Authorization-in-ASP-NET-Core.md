# Membership Role Policy-Based Authorization in ASP.NET Core

Right now on my free time I am looking to make an application that has multi-tenancy and each tenant in the application has a series of memberships. Each membership has a type such as ‘Owner’. In this application we have Organizations as the tenants and each user can have multiple memberships. 

So the issue is how do we provide and restrict access to the organization pages depending on the users membership or if it exists at all?

One way is to check the role on each action and redirect the user if they do not have privilege like below.

![](../src/assets/images/2018-05-20_01.png "Edit Action")

But this will force us to write duplicate code for each method to check the authorization.

To remedy this, we used the ‘[Authorize]’ attribute with a Policy that is inserted like this.

![](../src/assets/images/2018-05-20_02.png "Edit Action with Policy")

In the startup we added a few lines that adds the requirements. You can see the class being sent with a parameter for what to check for.

![](../src/assets/images/2018-05-20_03.png "Added Startup Code")

The ‘OrganizationRoleRequirement’ class with the parameter looks like below. 

![](../src/assets/images/2018-05-20_04.png "OrganizationRoleRequirement Class")

The ‘services.AddTransient<IAuthorizationHandler, OrganizationRoleHandler>();’ sends a class ‘OrganizationRoleHandler’ that handles the authorization logic that looks like this.

![](../src/assets/images/2018-05-20_05.png "OrganizationRoleHandler Class")

You can see the red box shows the logic in the first image and handles what is done in the ‘context’ object. If there is no authorization, you get sent to this.

![](../src/assets/images/2018-05-20_06.png "Access Denied")

Anyways, I hope this helps anyone who is looking to do something similar. Also, please send me any suggestions as this is an evolving project. 
