# Building a Site with Markdown Document Pages and Polymer

Question. Why use Markdown when we can use plain HTML? You can do more with HTML than a Markdown file.

Answer. Yes, you are right. I want to use Markdown because it cuts down on some of the complexities of HTML. Couple things. First, once you find a good Markdown file generator, you can write out precisely what you want down without the HTML tag complexities and not have to worry about CSS. You can see below that VSCode has a good preview editor.

![](../src/assets/images/2017-10-21_2.png "Preview for MD files")

Second, as my blog site grew with posts, it was difficult formatting HTML into JSON and then be injected into the site. I did not want to have individual html import files since I did not want to treat them as HTML files or components. I want my posts to be treated as posts. Markdown looks to be the best choice to use.

So here is what you must do:
* Configure Polymer
* Start a blank application
* Hack in some pages
* Make the pages into Markdown components

And that is it.

But not really. So, let's begin and fill in some details.

If you have not, install Node.js.

[nodejs.org](https://nodejs.org/" target="_blank)

Then make sure you have installed the Polymer CLI.

[Polymer CLI](https://www.polymer-project.org/2.0/docs/tools/polymer-cli" target="_blank)

You can probably tell you may need to familiarize yourself with polymer. Yes, please do, but I will try my best to go through this post in detail.

Once you have installed the CLI, you can start with an empty site. Find a good workspace location in your computer and in a command prompt/terminal navagate to that location. Then run this command:

polymer init

Then choose polymer-2-application and follow the prompts. Once it finishes, lets include two dependencies with commands:

bower install --save PolymerElements/marked-element

bower install --save PolymerElements/iron-pages

Make sure you run these commands within the same folder as the project since the dependencies are stores within the bower_components folder.

Once it finishes, open it up in an editor and open the main component file. It should contain:

```
<h2>Hello [[prop1]]!</h2>
```

At the top you should see an import file. We will add the marked element and iron pages components after that. Also, lazy import the md files. You should add these files yourself in the current directory.  It should look like:

```
<link rel="import" href="../../bower_components/polymer/polymer-element.html">
<link rel="import" href="../../bower_components/iron-pages/iron-pages.html">
<link rel="import" href="../../bower_components/marked-element/marked-element.html">

<link rel="lazy-import" href="home.md">
<link rel="lazy-import" href="about.md">
<link rel="lazy-import" href="contact.md">
```

Within the class of the web component, we are going to add a function to get the file path of the Markdown documents. It should look like:

```
_currentDocumentFilepath(currentDocument) {
	var currentDocument = currentDocument || 'home';
	return currentDocument + '.md';
}
```

Within the properties, we are going to add the variable currentDocument and currentDocumentFilepath. Change it to look like this:

```
static get properties() {
	return {
		currentDocument: {
			type: String,
			reflectToAttribute: true,
			value: "home"
		},

		currentDocumentFilepath: {
			type: String,
			reflectToAttribute: true,
			computed: '_currentDocumentFilepath(currentDocument)'
		},
		.
		.
		.
	};
}
```

Then lastly, in this file, we are going to add the HTML between the template tag. It should not look like:

```
<template>
	<style>
		:host {
			display: block;
		}
	</style>
	<h2>Hello [[prop1]]!</h2>

	Current filepath: [[currentDocumentFilepath]]

	<iron-pages selected="[[currentDocument]]"
		attr-for-selected="name"
		fallback-selection="home">
		<div name="home">
			<marked-element>
				<div slot="Markdown-html"></div>
				<script type="text/Markdown" src="src/Building-a-Site-with-Markdown-Document-Pages-app/home.md"></script>
			</marked-element>
		</div>
		<div name="about">
			<marked-element>
				<div slot="Markdown-html"></div>
				<script type="text/Markdown" src="src/Building-a-Site-with-Markdown-Document-Pages-app/about.md"></script>
			</marked-element>
		</div>
		<div name="contact">
			<marked-element>
				<div slot="Markdown-html"></div>
				<script type="text/Markdown" src="src/Building-a-Site-with-Markdown-Document-Pages-app/contact.md"></script>
			</marked-element>
		</div>
	</iron-pages>
</template>
```

That is it. You can open the site by running

```
polymer serve
```

You will probably have a couple issues when opening this, but it should look like:

![](../src/assets/images/2017-10-21_1.png "What site should look like")

So, there are some missing features and there are ways to make this better. For instance, there is no navigation buttons to other Markdown Documents or you can just dynamically place the document file location within the Markdown element, but I leave this to you to figure out. Also, if you want, you can look at the differences between my blog and this post. This blog has this feature fully build out and you may cheat and evolve your Markdown site using my repositories on Github:


[2017-10-20_Building-a-Site-with-Markdown-Document-Pages-and-Polymer](https://github.com/ajgoldenwings/2017-10-20_Building-a-Site-with-Markdown-Document-Pages-and-Polymer/" target="_blank)

versus

[AnthonyJamesPearson/tree/2017-October-Branch](https://github.com/ajgoldenwings/AnthonyJamesPearson/tree/2017-October-Branch" target="_blank)



