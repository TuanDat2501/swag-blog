(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404],{6837:function(e,a,t){Promise.resolve().then(t.bind(t,5718))},5718:function(e,a,t){"use strict";t.r(a);var l=t(7437),i=t(2265);t(505);var n=t(8472),s=t(6648),c=t(6463),r=t(6123),o=t(1165);a.default=()=>{let e=(0,c.useRouter)(),a=(0,c.useSearchParams)(),m=a.get("blogId")||"2336283564104274815",d=a.get("channel");console.log(d);let[h,u]=(0,i.useState)(),g=o.UK,[p,v]=(0,i.useState)(),x=a=>{e.push("/blog/blogId?p=".concat(a,"&b=").concat(f.blogId))},[f,j]=(0,i.useState)({name:"We luck",api_key:"AIzaSyBnTJYeJFCcwmKiC8dDWPce6WuiTKA2pR4",channelId:"UC3dW5i2TdXzcXBUEYpl8pgQ",blogId:"2336283564104274815"}),N=a=>{v(null),u(null),j(a),e.push("?blogId=".concat(a.blogId,"&&channel=").concat(a.name))};return(0,i.useEffect)(()=>{n.Z.get("".concat(o.p3).concat(m,"/posts?key=").concat(f.api_key)).then(e=>{let a=e.data.items,l=[];for(let e=0;e<a.length;e++){let i,n={title:"",content:"",publishDate:"",id:"",thumbnailUrl:"",fullContent:"",videoId:"",author:{avatarUrl:"",displayName:""}},s=t(156).load(a[e].content),c=s("iframe").attr("youtube-src-id");c?n.videoId=c:n.videoId=s("img").attr("src")||"",i=s("div.separator").text()?s("div.separator").text():s("p").text();let r={month:"long",day:"numeric",year:"numeric"},o=new Date(a[e].published),m=new Intl.DateTimeFormat("en-US",r).format(o);n.thumbnailUrl="",n.title=a[e].title,n.content=i,n.publishDate=m,n.id=a[e].id,n.fullContent=a[e].content,n.author.avatarUrl=a[e].author.image.url,n.author.displayName=a[e].author.displayName,l.push(n)}u(l)}).catch(e=>{console.log(e)}).finally(()=>{})},[m,f]),(0,i.useEffect)(()=>{if(h){let e=h.map(e=>e.videoId).join(",");n.Z.get("".concat(o.n8,"videos"),{params:{part:"snippet,contentDetails,player",key:f.api_key,id:e}}).then(e=>{for(let t=0;t<h.length;t++){let l=e.data.items.find(e=>h[t].videoId==e.id);if(l){var a;h[t].thumbnailUrl=null===(a=l.snippet)||void 0===a?void 0:a.thumbnails.standard.url}else h[t].thumbnailUrl=h[t].videoId}v(h)}).catch(e=>{console.log(e)}).finally(()=>{})}},[f,h]),(0,i.useEffect)(()=>{t(3093)},[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"header-blog",children:(0,l.jsx)("div",{className:"overlay"})}),(0,l.jsxs)("div",{className:"content-blog",children:[(0,l.jsx)("div",{className:"row",children:(0,l.jsxs)("div",{className:"col-12",children:[(0,l.jsx)("h2",{className:"tm-page-title mb-4",children:"Blogs"}),(0,l.jsxs)("div",{className:"tm-categories-container mb-4 flex",children:[(0,l.jsx)("h3",{className:"tm-text-primary tm-categories-text",children:"Categories:"}),(0,l.jsx)("ul",{className:"nav tm-category-list flex gap-5",children:g.map((e,a)=>(0,l.jsx)("li",{className:d==e.name?"nav-item tm-category-item active":"nav-item tm-category-item",children:(0,l.jsx)("a",{className:"nav-link tm-category-link cursor-pointer",onClick:()=>N(e),children:e.name})},a))})]})]})}),(0,l.jsx)("div",{className:"row tm-catalog-item-list",children:p?p.map((e,a)=>(0,l.jsxs)("div",{className:"col-lg-4 col-md-6 col-sm-12 tm-catalog-item tm-bg-gray",children:[(0,l.jsxs)("div",{className:"position-relative tm-thumbnail-container",onClick:()=>x(e.id),children:[(0,l.jsx)(s.default,{width:200,height:200,quality:100,src:e.thumbnailUrl,alt:"Image",className:"img-fluid tm-catalog-item-img"}),(0,l.jsx)("a",{className:"position-absolute tm-img-overlay"})]}),(0,l.jsxs)("div",{className:"p-4 tm-catalog-item-description",children:[(0,l.jsxs)("div",{className:"content-item",children:[(0,l.jsx)("h3",{className:"tm-text-primary mb-3 tm-catalog-item-title",children:e.title}),(0,l.jsx)("p",{className:"tm-catalog-item-text",children:e.content})]}),(0,l.jsx)("p",{children:e.publishDate}),(0,l.jsx)("div",{className:"author",children:(0,l.jsxs)("div",{className:"avatar",children:[(0,l.jsx)(s.default,{width:200,height:200,quality:100,src:e.author.avatarUrl,alt:"avarta"}),(0,l.jsx)("p",{children:e.author.displayName})]})})]})]},a)):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z,{}),(0,l.jsx)(r.Z,{}),(0,l.jsx)(r.Z,{})]})}),(0,l.jsx)("div",{children:(0,l.jsxs)("ul",{className:"nav tm-paging-links flex",children:[(0,l.jsx)("li",{className:"nav-item active",children:(0,l.jsx)("a",{href:"#",className:"nav-link tm-paging-link",children:"1"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"#",className:"nav-link tm-paging-link",children:"2"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"#",className:"nav-link tm-paging-link",children:"3"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"#",className:"nav-link tm-paging-link",children:"4"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)("a",{href:"#",className:"nav-link tm-paging-link",children:" ˃"})})]})})]})]})}},6123:function(e,a,t){"use strict";var l=t(7437);t(2265);var i=t(1978);t(2076),a.Z=()=>(0,l.jsxs)("div",{className:"skeleton-item",children:[(0,l.jsx)(i.Z.Image,{active:!0,style:{width:"100%",height:"100%"}}),(0,l.jsx)(i.Z,{active:!0})]})},1165:function(e,a,t){"use strict";t.d(a,{$h:function(){return i},UK:function(){return c},ju:function(){return s},n8:function(){return l},p3:function(){return n}});let l="https://content-youtube.googleapis.com/youtube/v3/",i="AIzaSyDRrwtxM4REuwFaruHqzL8VORX7YqOTK00",n="https://www.googleapis.com/blogger/v3/blogs/",s="https://www.googleapis.com/youtube/v3",c=[{name:"We luck",api_key:"AIzaSyBnTJYeJFCcwmKiC8dDWPce6WuiTKA2pR4",channelId:"UC3dW5i2TdXzcXBUEYpl8pgQ",blogId:"2336283564104274815"},{name:"Mouse Farm",api_key:"AIzaSyCidjgzpwEw9ja5fClDLgHHtAcYd8u7TBs",channelId:"UCcguEALpeQIu6PKQBumtNcQ",blogId:"969969710166700179"},{name:"WEWIN",api_key:"AIzaSyCPhW2f8QA_4M8dOR33ByZrR8wAmwL4Qmk",channelId:"UC8Rohf4JGwlKIUSnYlUipvQ",blogId:"5186892035112058551"},{name:"WEWIN NEW",api_key:"AIzaSyCdFnZWYvuNNKUPCtqT50aSm--xivArxKA",channelId:"UCU_0ofvjo8FrkP2f6NFF7XQ",blogId:"5938893414256117793"},{name:"SWAG Lab",api_key:"AIzaSyDGsdo4W7vqH2j3fneSKI0_I0ezjA7RXSU",channelId:"UCx-hQqGM-upoYSyy2n0t0xg",blogId:"1931491334598443146"},{name:"SWAG Fails",api_key:"AIzaSyASPYUYeY_-1pDp81RI_inI3UJcUahm58w",channelId:"UCHXMtIadBUGVhfCzwUoGLuA",blogId:"7456989316884997047"}]},3093:function(){},505:function(){},2076:function(){}},function(e){e.O(0,[873,150,690,131,156,478,23,744],function(){return e(e.s=6837)}),_N_E=e.O()}]);