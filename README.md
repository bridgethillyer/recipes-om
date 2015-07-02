# recipes-om

A version of the [Om tutorial]
(https://github.com/swannodette/om/wiki/Tutorial).


## usage 
There is a ring server and Figwheel is used for the ClojureScript a la this [blog post](http://blog.michielborkent.nl/blog/2014/09/25/figwheel-keep-Om-turning/). So to run this, start Figwheel, then start ring:

`lein figwheel`

`lein ring server`

The browser should open automatically to: [localhost:8090/index.html](http://localhost:8090/index.html)

## License

Copyright © 2014 Bridget Hillyer 

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
