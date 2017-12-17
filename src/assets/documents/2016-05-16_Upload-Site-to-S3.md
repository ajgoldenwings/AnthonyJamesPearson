# Upload Site to S3

There are many sites that you can put your site on the internet for free. Sadly, I did not have an easy way to do this when I started designing webpages. But free comes with strings attached. They will not let you have your own domain name. You will have to be under theirs. Some even have a water mark, yuck! AWS lets you upload your site, and at no cost if you are under the free tier.

Next post I will show you how to register and link your own domain to it.

Let's begin with logging in and heading to the dashboard. Click and open up S3.

![](../src/assets/images/p8.jpg "S3")

I will follow this one with you for the sake of actually doing it and to take screenshots as I go along. I am going to be using my nickname in college as the site name which will be Antwan TwerkSwag. Yes, they did call me that. Twan for short. The site, when finished, will be antwantwerkswag.com.

Okay, we will be creating two buckets. Both buckets will be used later when we route to them. One will be yourdomainname.com and the other will be www.yourdomainname.com. Choose whatever you can think of that is not already used. Sadly, your first and last name probably is already taken unless it's an alter ego like Antwan TwerkSwag.

You can check if you can use the domain name by going to the AWS console in a new tab. Click Route 53.

![](../src/assets/images/p9.jpg "Route S3")

Enter a domain name in the register domain checking area and click check.

If you see a green check, then good. It is good to use. Next post will be registering it and assigning it to your S3 bucket.

Go back to your tab with S3. Click create bucket, add your domain name that you chose and put .com at the end of it. Choose a region where you are generally located. I chose US Standard just because. Okay click create and repeat the process with www. at the beginning of it as well.

![](../src/assets/images/p14.jpg "Create bucket")

Click on the domain that has the www. This is where we will put your website into. I hope you do have a website to put in here. Click actions to upload some files.

![](../src/assets/images/p15.jpg "Upload to bucket")

Drag your files. I hope your site has more files than mine. Click start upload.

![](../src/assets/images/p16.jpg "Drag files to bucket")

Nice, your site is in the cloud. To view it click the properties button. Go into static website hosting. Click enable website hosting. Enter the index document when you click enable website hosting. Mine would be index.html. Click Save.

![](../src/assets/images/p17.jpg "Enable website")

Before clicking the endpoint, or the URL, you will have to give access to your s3 bucket. Unfortunately, if you do click it, you will be denied access. To give access to your bucket items, drop the permissions section down and click add bucket policy.

![](../src/assets/images/p18.jpg "Add bucket policy")

In the modal that pops up enter this:

![](../src/assets/images/p19.jpg "Policy")

```
{
	'Version': '2012-10-17',
	'Statement': [
		{
			'Sid': 'Allow Public Access to All Objects',
			'Effect': 'Allow',
			'Principal': '*',
			'Action': 's3:GetObject',
			'Resource': 'arn:aws:s3:::www.antwantwerkswag.com/*'
		}
	]
}
```

Make sure you place your domain name In lieu of antwanterkswag. Click save. Now You will have access to that link and everyone has access to your site.

Next will dicover how to add your domain name to it and a couple modifications to your other bucket.

Stay classy my friends.
