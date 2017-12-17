# Dynamically Loading Pages From Navigation Links

One issue that I came across when making sites is the redundant amount of copies of the menu and footer on each page of the site. So if I had to make a change to the menu, I had to make the change for each page. This has been solved in many areas and I hope this implementation helps you understand how it gets solved. NOTE: you will have to set up your IIS or similar because you will run in to origin request issues. This is easy to set up and I explain how to set it up in my post &lsquo;Creating Your First Website With IIS&rsquo;. Let us start with a base index.html file.

![](../src/assets/images/p30.jpg)

We can see that it has three links in a basic, minimal menu. You may add styling and such after to meet your needs. You should be able to do everything in this article with standard JavaScript but I am going to use jQuery just cause I like it and you should too. Go to [https://jquery.com/download/](https://jquery.com/download/" target="_blank) and download the latest compressed, production version.

![](../src/assets/images/p31.jpg)

Create an assets folder and placed the js file there.  Also rename it to 'jquery.min.js'.

![](../src/assets/images/p32.jpg)

Next, in the assets folder, create an empty file called site 'siteloader.js' like this:

![](../src/assets/images/p33.jpg)

In our index.html file we will include the file underneath the 'hr' tag. Also we will create a div container where each link item will load into. If you click the menu items, you will notice that the URL will also change. The siteloader file will have code to look at those changes and direct the div container to show that page.

![](../src/assets/images/p34.jpg)

Before we start adding code let's make some files. Create a folder named pages in the root directory with the index.html file and add three files named home.html, posts.html, and about.html.

![](../src/assets/images/p35.jpg)

Now the fun stuff. We first want to see if the siteloader.js file actually loads. To do this, just put alert('Site Loader Here'); in siteloader.js.

![](../src/assets/images/p36.jpg)

And run the page and see if you get an alert like:

![](../src/assets/images/p37.jpg)

Delete the alert continue coding. You may put the alert in functions to help understand the flow of the code. Add code below. I think it's the most important part of the file. You will see that now that if you click a link, you will see the alert box show up. This is because that on hash change it calls the code between the brackets.

![](../src/assets/images/p38.jpg)

Delete the alert now and replace it with loadPageFromHashToId('#siteloader-pagecontainer'); and create a new function loadPageFromHashToId. Inside, we will put text to show that the said page is loading…

![](../src/assets/images/p39.jpg)

So this just loads text into place but we want to load actual files. So let's do that. First we need to get the actual file name and directory so we will create a function called getURLFromHash and rework our loadPageFromHashToId function to set the returned URL from getURLFromHash to a variable. The function getURLFromHash has a couple cases such as if the hash is empty but defaults to what the has is and generates the page URL and constructs the URL.

![](../src/assets/images/p40.jpg)

The last line in the loadPageFromHashToId function to add will be to load the page to the div container.  Add $(id).load(hashURL); as the last line of code in the function. You should be able to load the site now! You may notice that if you refresh the page, you will not see the page load correctly. This is because the function to load the page was not called because the on hash change function was not called to call loadPageFromHashToId. All you have to do to fix this is to call the function loadPageFromHashToId once. To do this add it at the end of the file which will be called every time the page loads or refreshes.

![](../src/assets/images/p41.jpg)

Cool! That is it. If you want to see more content on this topic, let me know. I have a few additional things beyond this such as saving pages in session storage which loads pages even quicker that has the ability to search for links and automatically save them on page loads. Stay cool everyone.

[Download all files here](https://github.com/ajgoldenwings/2016-06-25_siteloader" target="_blank)

### Other interesting links:
* [https://blog.httpwatch.com/2011/03/01/6-things-you-should-know-about-fragment-urls/](https://blog.httpwatch.com/2011/03/01/6-things-you-should-know-about-fragment-urls/" target="_blank)
