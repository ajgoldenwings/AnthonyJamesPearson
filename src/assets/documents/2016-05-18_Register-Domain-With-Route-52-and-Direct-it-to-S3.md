# Register Domain With Route 52 and Direct it to S3

It took me to do this a while the first time but after a couple of times doing this it is as easy as 1, 2, 3. Well, it takes about an hour to two hours, maybe less. But you should be in the right area if you want to get your own domain name for your website. Let's start.

![](../src/assets/images/p7.jpg "AWS Console")

Let's start with going to the AWS Console. Oh yes, please review my earlier posts if you have not.

![](../src/assets/images/p9.jpg "Route 53")

We will begin with clicking Route 53. Go ahead and choose a domain name and check if it is available. Review that you spelled it correctly and press add to cart. NOTICE you will pay monies. Add to cart if it exists.

![](../src/assets/images/p11.jpg "Register Domain")

Review again and scroll down and click continue.

![](../src/assets/images/p12.jpg "Continue Purchase")

Put your contact details. I recommend clicking the hide contact information if you do not want to receive random crap. Click Continue. Check I have read and agree to the AWS Domain Name Registration Agreement. Click Complete. Purchase.

![](../src/assets/images/p13.jpg "Complete Purchase")

You will be redirected and will see a link where your domain will be populated when finished. This domain registration process should take a good chunck of your time.

![](../src/assets/images/p20.jpg "Domain Registration Status")

Take five and go do something else. You should get an email saying your domain successfully registered in around 15 minutes.

![](../src/assets/images/p21.jpg "Email of successful registration")

<p class='center'>Fuck Yea! A domain has been born.

![](../src/assets/images/p22.jpg "Fuck Yea")

Oops, sorry, meant to put that at the bottom. We still need to do some routing. We are half way there. I believe in you! Once you're ready go back to your AWS console and click Route 53, if you are not already in it. You will notice that it will show that your site has been registered. We will want to go to your new hosted zone. Click on hosted zones.

![](../src/assets/images/p23.jpg "Route 53 to Hosted Zones")

Then click on your newly created hosted zone.

![](../src/assets/images/p24.jpg "Hosted Zones to zone")

You will see that the next screen shows two records. One is the Name Server. The other is the Start of Authority. What are these? I do not want to answer since google may have a better answer for you. But we will need to create two records. They will be the www and the non-www links to your website. For example: www.yourcoolwebsite.com and yourcoolwebsite.com. That is what we will be adding.

![](../src/assets/images/p25.jpg "Hosted Zone records")

Let's start with the www version of the site. Put www in the name. Check Yes for Alias. Select the S3 website endpoint for the Alias Target. Leave everything else as is and click create.

![](../src/assets/images/p26.jpg "Create Record www")

Then we will do the same thing but for the non-www link. Click Create Record Set for a second time. Leave name empty this time. Click Alias Target and scroll down to Record sets and click yours. Click Create.

![](../src/assets/images/p27.jpg "Create Record non-www")

You see the www version when you click the Alias Target because in the last post we added permissions to the bucket policy. We only did this for the www version. As of now, you may use the www version of the site. Before you do that lets make the non-www version of the site redirect to the www version of the site.

Go back to the AWS Console and click S3.

![](../src/assets/images/p8.jpg "S3")

Click the non-www version of your site in S3. Click the properties button. Drop down the Static Web Hosting section. Click Redirect all requestes to another host name. Enter the www version of the site. In my case it was smart enought to enter it in. Click Save.

![](../src/assets/images/p28.jpg "Redirect non-www site")

And there you have it. Both versions work and you have very own website.

Stay brilliant my friends.
