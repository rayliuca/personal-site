(this["webpackJsonprayliuca.github.io"]=this["webpackJsonprayliuca.github.io"]||[]).push([[5],{164:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n(5),i=n(23),c=n(0),o=function(e){var t=e.data;return Object(c.jsx)("article",{className:"degree-container",children:Object(c.jsxs)("header",{children:[Object(c.jsx)("h4",{className:"degree",children:t.degree}),Object(c.jsxs)("p",{className:"school",children:[Object(c.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},s=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"education",children:[Object(c.jsx)("div",{className:"link-to",id:"education"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(c.jsx)(o,{data:e},e.school)}))]})};s.defaultProps={data:[]};var l=s,u=function(e){var t=e.data;return Object(c.jsxs)("article",{className:"jobs-container",children:[Object(c.jsxs)("header",{children:[Object(c.jsxs)("h4",{children:[Object(c.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(c.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(c.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(c.jsx)("li",{children:e},e)}))})]})},p=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"experience",children:[Object(c.jsx)("div",{className:"link-to",id:"experience"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(c.jsx)(u,{data:e},e.company)}))]})};p.defaultProps={data:[]};var b=p,d=function(e){var t=e.data;return Object(c.jsxs)("article",{className:"jobs-container",children:[Object(c.jsx)("header",{children:Object(c.jsx)("h4",{children:t.company})}),Object(c.jsx)("ul",{className:"points",children:t.pubs.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:e.name})},e.name)}))})]})},m=function(e){var t=e.data;return Object(c.jsxs)("div",{className:"bibliography",children:[Object(c.jsx)("div",{className:"link-to",id:"bibliography"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Bibliography"})}),t.map((function(e){return Object(c.jsx)(d,{data:e},e.company)}))]})};m.defaultProps={data:[]};var y=m;function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e){return(j="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){return!t||"object"!==j(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f(e);if(t){var r=f(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return v(this,n)}}var x=n(55),k=n(54),E=function(e){var t=e.handleClick,n=e.active,a=e.label;return Object(c.jsx)("button",{className:"skillbutton ".concat(n[a]?"skillbutton-active":""),type:"button",onClick:function(){return t(a)},children:a})},S=function(e){var t=e.data,n=e.categories,a=t.category,r=(t.competency,t.title),i={background:n.filter((function(e){return a.includes(e.name)})).map((function(e){return e.color}))[0]};return Object(c.jsx)("div",{className:"skillbar-title skillbar",style:i,children:Object(c.jsx)("span",{children:r})})};S.defaultProps={categories:[]};var D=S,P=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,a,r=O(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=r.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,a){return Object(k.a)(Object(k.a)({},n),{},Object(x.a)({},a,e===a&&!t.buttons[a]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(k.a)(Object(k.a)({},e),{},Object(x.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=i,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(c.jsx)(D,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(c.jsx)(E,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{className:"skills",children:[Object(c.jsx)("div",{className:"link-to",id:"skills"}),Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h3",{children:"Skills"}),Object(c.jsx)("p",{children:"Some relevant skills I have:"})]}),Object(c.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(c.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&h(t.prototype,n),a&&h(t,a),i}(a.Component);P.defaultProps={skills:[],categories:[]};var A=P,N=function(e){var t=e.data,n=e.last;return Object(c.jsxs)("li",{className:"course-container",children:[Object(c.jsxs)("a",{href:t.link,children:[Object(c.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(c.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(c.jsx)("div",{className:"course-dot",children:Object(c.jsx)("p",{className:"course-name",children:" \u2022"})})]})};N.defaultProps={last:!1};var C=N,w=function(e){var t,n=e.data;return Object(c.jsxs)("div",{className:"courses",children:[Object(c.jsx)("div",{className:"link-to",id:"courses"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("h3",{children:"Selected Courses"})}),Object(c.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(c.jsx)(C,{data:e,last:n===t.length-1},e.title)})))})]})};w.defaultProps={data:[]};var T=w,I=function(){return Object(c.jsxs)("div",{className:"references",children:[Object(c.jsx)("div",{className:"link-to",id:"references"}),Object(c.jsx)("div",{className:"title",children:Object(c.jsx)("a",{href:"mailto:ray@rayliu.ca",children:Object(c.jsx)("h3",{children:"References are available upon request"})})})]})},L=[{title:"Principles of Economics",number:"ECON 204",link:"https://apps.ualberta.ca/catalogue/archive/course/econ/204/1570",university:"University of Alberta"},{title:"Continuous Time Signals and Systems",number:"ECE 240",link:"https://apps.ualberta.ca/catalogue/archive/course/ece/240/1620",university:"University of Alberta"},{title:"Introduction to Digital Logic Design",number:"ECE 210",link:"https://apps.ualberta.ca/catalogue/course/ece/210",university:"University of Alberta"},{title:"Programming for Electrical Engineering",number:"ECE 220",link:"https://apps.ualberta.ca/catalogue/course/ece/210",university:"University of Alberta"},{title:"Electronic Devices",number:"ECE 302",link:"https://apps.ualberta.ca/catalogue/course/ece/302",university:"University of Alberta"},{title:"Discrete Time Signals and Systems",number:"ECE 340",link:"https://apps.ualberta.ca/catalogue/course/ece/340",university:"University of Alberta"},{title:"Theory of Functions of a Complex Variable",number:"Math 311",link:"https://apps.ualberta.ca/catalogue/course/math/311",university:"University of Alberta"},{title:"Analog Electronics",number:"ECE 303",link:"https://apps.ualberta.ca/catalogue/course/ece/303",university:"University of Alberta"},{title:"Analytical Methods in Electrical Engineering",number:"ECE 341",link:"https://apps.ualberta.ca/catalogue/course/ece/341",university:"University of Alberta"},{title:"Introduction to Nanoelectronics",number:"ECE 456",link:"https://apps.ualberta.ca/catalogue/course/ece/456",university:"University of Alberta"},{title:"Statistical Physics",number:"PHYS 311",link:"https://apps.ualberta.ca/catalogue/course/phys/311",university:"University of Alberta"},{title:"Quantum Mechanics A",number:"PHYS 372",link:"https://apps.ualberta.ca/catalogue/course/phys/372",university:"University of Alberta"},{title:"Intelligent Systems Engineering",number:"ECE 449",link:"https://apps.ualberta.ca/catalogue/course/ece/449",university:"University of Alberta"},{title:"Engineering Physics Design Project I&II",number:"ECE 494/495",link:"https://apps.ualberta.ca/catalogue/course/ece/494",university:"University of Alberta"},{title:"Introduction to Condensed Matter Physics",number:"PHYS 415",link:"https://apps.ualberta.ca/catalogue/course/phys/415",university:"University of Alberta"},{title:"Control Systems I",number:"ECE 360",link:"https://apps.ualberta.ca/catalogue/course/ece/360",university:"University of Alberta"},{title:"Introduction to Communication Systems",number:"ECE 380",link:"https://apps.ualberta.ca/catalogue/course/ece/360",university:"University of Alberta"},{title:"Financial Management for Engineers",number:"ENG M 401",link:"https://apps.ualberta.ca/catalogue/course/eng_m/401",university:"University of Alberta"},{title:"Introductory Financial Accounting",number:"ACCT 253",link:"https://www.athabascau.ca/syllabi/acct/acct253.php",university:"Athabasca University"}],M=[{school:"University of Alberta - Dept. of Electrical and Computer Engineering",degree:"B.Sc. Engineering Physics With Distinction",link:"https://www.ualberta.ca/engineering/electrical-computer-engineering/about-us/index.html",year:2021}],R=[{company:"Tricca Technologies",position:"Research and Development Co-op",link:"https://www.tricca.ca/",daterange:"June 2020 - August 2020",points:["Tricca Technologies is a startup company focused on medical device development.","Designed C++ firmware, circuits, PCBs, and 3D printed parts for an electric arc ampoule sealer for independent laboratories to repackage expensive chemical standards into smaller ampoules, reducing cost and waste"]},{company:"Microsemi/ Microchip Technology",position:"Physical Design Intern",link:"https://www.microsemi.com/",daterange:"September 2019 - December 2019",points:["Automated version auditing process to greatly improve operational flow and reduce version mismatch between various design steps using RESTful API and Python, saving managers from manually auditing over 3000 entries of version records. Reduced version auditing time from hours to minutes.","Scripted my place-and-route processes in Tcl/Tk so the work is still usable should the designs change.","Worked with the Atlassian software ecosystem, such as Bitbucket and Jira."]},{company:"Binary Research Group",position:"Data Analyst/ Research Assistant",link:"http://binaryrg.ece.ualberta.ca/",daterange:"January 2019 - August 2019",points:["Worked on a smart Arduino IoT device to perform colorectal cancer screening","funded by the National Institutes of Health (NIH) for patients in Nigeria.","Programmed the screening tests using colorimetric reactions based on metabolite concentrations in urine.","Established calibration algorithms to mitigate variations between sensors."]},{company:"Ultrafast Spectroscopy and Nanotools Labs",position:"Research Assistant",link:"https://hegmannthz.wordpress.com/",daterange:"January 2019 - August 2019",points:["Created a scheduler script for COMSOL in Python to increase the simulation capacity by 80%.","Oversaw 1400 hours of COMSOL simulations with semiconductor and electromagnetic modules.","Developed a graphical user interface (GUI) for MATLAB models created by colleagues.","Improved an electron diffusion finite element model in Python"]}],U=n(19);var W=n(25);var B,J=[{title:"Javascript",competency:4,category:["Web Development","Languages","Javascript"]},{title:"Tcl/Tk",competency:2,category:["Languages"]},{title:"Google App Script",competency:4,category:["Tools","Web Development","Javascript"]},{title:"Node.JS",competency:2.5,category:["Web Development","Javascript"]},{title:"React",competency:1,category:["Web Development","Javascript"]},{title:"Bash",competency:1,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:2,category:["Web Development","Tools"]},{title:"Heroku",competency:2,category:["Web Development","Tools"]},{title:"MongoDB",competency:2.5,category:["Web Development","Databases"]},{title:"PostgreSQL/MySQL/SQL",competency:3,category:["Web Development","Databases","Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Express.JS",competency:2,category:["Web Development","Javascript"]},{title:"Leaflet",competency:3,category:["Web Development","Javascript","Data Engineering"]},{title:"Tableau",competency:3,category:["Data Engineering","Tools"]},{title:"Flask",competency:1,category:["Web Development","Python"]},{title:"Git/GitHub/BitBucket",competency:3,category:["Tools"]},{title:"Kubernetes",competency:1,category:["Tools","Data Engineering"]},{title:"Docker",competency:2,category:["Tools","Data Engineering","Web Development"]},{title:"Google Cloud Compute",competency:2,category:["Tools","Web Development"]},{title:"Numpy",competency:5,category:["Data Science","Data Engineering","Python"]},{title:"Numba",competency:1,category:["Data Science","Data Engineering","Python"]},{title:"Tensorflow + Keras",competency:3,category:["Data Science","Python"]},{title:"Jupyter",competency:4,category:["Data Science","Python"]},{title:"HTML",competency:3,category:["Web Development","Languages"]},{title:"SASS/SCSS/CSS",competency:2,category:["Web Development","Languages"]},{title:"Python",competency:5,category:["Languages","Python"]},{title:"C/C++",competency:3,category:["Languages"]},{title:"MATLAB",competency:4,category:["Languages","Data Science"]},{title:"Data Visualization",competency:3,category:["Data Science","Javascript"]},{title:"Pandas",competency:5,category:["Data Engineering","Data Science","Python"]},{title:"Seaborn",competency:3,category:["Data Engineering","Data Science","Python"]},{title:"Matplotlib",competency:2,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:3,category:["Data Engineering","Data Science","Python"]}].map((function(e){return Object(k.a)(Object(k.a)({},e),{},{category:e.category.sort()})})),H=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],z=(B=new Set(J.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(U.a)(e)}(B)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(B)||Object(W.a)(B)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:H[t]}})),_=[{company:"Co-authored",points:["Nanoscale terahertz STM imaging of a metal surface (PHYSICAL REVIEW B)","Characterization of THz-induced bias voltage modulation in an STM (IEEE)","Modeling the Terahertz Pulse Induced Transient Bias in the STM Junction (IEEE)"],pubs:[{name:"Nanoscale terahertz STM imaging of a metal surface (PHYSICAL REVIEW B)",link:"https://journals.aps.org/prb/abstract/10.1103/PhysRevB.102.205417"},{name:"Characterization of THz-induced bias voltage modulation in an STM (IEEE)",link:"https://ieeexplore.ieee.org/document/9370648"},{name:"Modeling the Terahertz Pulse Induced Transient Bias in the STM Junction (IEEE)",link:"https://ieeexplore.ieee.org/document/9370659"}]}],G=["Education","Skills","Experience","Bibliography","Courses","References"];t.default=function(){return Object(c.jsx)(i.a,{title:"Resume",description:"Ray Liu's Resume. University of Alberta New Grad. Seeking opportunity in data science and machine learning",children:Object(c.jsxs)("article",{className:"post",id:"resume",children:[Object(c.jsx)("header",{children:Object(c.jsxs)("div",{className:"title",children:[Object(c.jsx)("h2",{"data-testid":"heading",children:Object(c.jsx)(r.b,{to:"resume",children:"Resume"})}),Object(c.jsx)("div",{className:"link-container",children:G.map((function(e){return Object(c.jsx)("h4",{children:Object(c.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(c.jsx)(l,{data:M}),Object(c.jsx)(A,{skills:J,categories:z}),Object(c.jsx)(b,{data:R}),Object(c.jsx)(y,{data:_}),Object(c.jsx)(T,{data:L}),Object(c.jsx)(I,{})]})})}},54:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n(55);function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},55:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=5.7e35f624.chunk.js.map