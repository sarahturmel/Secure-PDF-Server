# Secure-PDF-Server
This is my repository for the third homework of COS 498 Server-Side Web Development.
To access the secure PDF server, please visit keengreenmachine.org or www.keengreenmachine.org

## Metadata file format of json files:
{
  "title": title of pdf,
  "length": number of pages,
  "description": brief description of the content
}

## Routing structure:
The javascript for this project is split into four files:
1. discovery.js, which finds the files in the pdfs folder, and returns a list of them
2. validation.js, which ensures that the pdfs are in the folder and exist
3. routing.js, which takes care of the routing for this project, including getting the list from discovery.js, sending it to the homepages, and serving the pdfs themselves
4. server.js, which brings it all together, setting the view engine and views, registering partials, serving public, validating pdfs, using the routing, and listening in on the port
Note: server.js uses validation.js and routing.js, and routing.js uses discovery.js.

## Setup Steps:
To setup this project, I had to purchase and configure and domain, then set up the proxy manager and SSL certificates, per the insturctions in the Webserver Tome (Tomb).
To get the site up and running, I perform docker commands in my cloned repository on my server.
