# Creating Your First Website With IIS

Let me first say YES this is my first post!

Secondly, this post is not your answer in how to create your first website. There are too many ways to do it. I can only make recommendations. The foremost is to have fun!

You may be wanting to make a site but has no idea where to start. Luckily, I have a friend, Victor, who has been learning a lot in the past few months. So I connected with him to try to work things through.

Learn the basics. That is html. This can be accomplished by going to any tutorial site. I like w3schools.com/html/. If you find that to complicated try searching on your neighborhood friendly search site 'learn html'. Go through and learn, read, explore! Go to multiple sources, take a class, and ask questions to your tech guru.

Learn CSS, JavaScript (not to be confused with Java, even though Java is a fun language to learn), get comfortable with a framework like Bootstrap. The choices are endless.

Google is your friend. Your questions have been asked. Go search them on the internet.

I'll end lastly with some help setting up a site so you don't have to double click you html file to show it on your browser. You can just type localhost, or better yet, 'mywebsite' in the URL.

First you will need IIS. Thankfully it is built into windows. If you are not on windows, I am sorry. IIS is a web server. If you want to know more what it is, google it. Let's activate it.

![](../src/assets/images/p1.jpg "Turn on windows feature IIS")

Go to programs and features and follow the arrows.

IIS should start automatically and be in your start menu after pressing OK. Full disclosure, I am doing this my memory so I might miss a step.

![](../src/assets/images/p3.jpg "IIS main screen")

You will see this screen. From here you will want to open the Sites folder on the left hand side. You should see Default Web Site with a world by it. Click that too.

On the right hand side, you will see some more stuff. Click Basic Settings. Enter the Physical Path. Click test settings and hopefully you will get two green checks. If you don't, click connect as and enter your username (full email) and password for logging into your computer. If you use a different domain for an email, you must put the domain name with a '\\' and then your email. It will sort of look like this DOMAINNAME\\youremail@DOMAINNAME.com. I am not sure why this just works without entering your user credentials but please let me know if you know what I am doing wrong.

At this point, click 'Browse *:80 (http)' and you should see your site as localhost.

Say we want to change that to mywebsite. On the left side of IIS, right click the Sites folder and choose 'Add Website'.

![](../src/assets/images/p4.jpg "Add Website")

Enter a site name, mywebsite. Set the Physical Path. Connect as you. Leave the Binding area alone except the Host name where you will put 'mywebsite'. Click OK.

If you browse mywebsite, you will see that it does not work. To fix this, go browse to <em>C:\\Windows\\System32\\drivers\\etc</em>. Edit the hosts file.  Oops, you may not have permission. To remedy this, right click the hosts file, click the Security tab, click Edit, select Users and give yourself full control.

![](../src/assets/images/p5.jpg "Set Permissions")

Now edit the hosts file. At the bottom of the file, add '127.0.0.1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;mywebsite'. Save.

![](../src/assets/images/p6.jpg "Hosts File")

Now try browsing mywebsite.

Let me know if I should add any more details, suggestions, stories, photos or just complement me. You're welcome.
