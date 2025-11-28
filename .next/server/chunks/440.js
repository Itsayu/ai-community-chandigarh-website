exports.id=440,exports.ids=[440],exports.modules={974:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(5986),a=r(8974);function n(...e){return(0,a.QP)((0,s.$)(e))}},1135:()=>{},1410:(e,t,r)=>{"use strict";r.d(t,{Header:()=>w});var s=r(687),a=r(5814),n=r.n(a),o=r(6189),i=r(3210),l=r(4343),d=r(8726),c=r(9523),m=r(1553),u=r(4224),h=r(4780);let f=m.bL,g=m.l9;m.bm;let b=m.ZL,p=i.forwardRef(({className:e,...t},r)=>(0,s.jsx)(m.hJ,{className:(0,h.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t,ref:r}));p.displayName=m.hJ.displayName;let x=(0,u.F)("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500",{variants:{side:{top:"inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",bottom:"inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",left:"inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",right:"inset-y-0 right-0 h-full w-3/4  border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"}},defaultVariants:{side:"right"}}),v=i.forwardRef(({side:e="right",className:t,children:r,...a},n)=>(0,s.jsxs)(b,{children:[(0,s.jsx)(p,{}),(0,s.jsx)(m.UC,{ref:n,className:(0,h.cn)(x({side:e}),t),...a,children:r})]}));v.displayName=m.UC.displayName,i.forwardRef(({className:e,...t},r)=>(0,s.jsx)(m.hE,{ref:r,className:(0,h.cn)("text-lg font-semibold text-foreground",e),...t})).displayName=m.hE.displayName,i.forwardRef(({className:e,...t},r)=>(0,s.jsx)(m.VY,{ref:r,className:(0,h.cn)("text-sm text-muted-foreground",e),...t})).displayName=m.VY.displayName;let y=[{href:"/events",label:"Events"},{href:"/team",label:"Team"}];function w(){let[e,t]=(0,i.useState)(!1),r=(0,o.usePathname)();return(0,s.jsxs)("header",{className:"sticky top-0 z-50 w-full border-b border-border/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70",children:[(0,s.jsx)("style",{children:`
        /* Animated Google color gradient for logo text */
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 50% 100%;
          }
          75% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 50% 0%;
          }
        }
        
        .google-gradient-text {
          background: linear-gradient(
            135deg,
            #4285F4 0%,
            #EA4335 25%,
            #FBBC05 50%,
            #34A853 75%,
            #4285F4 100%
          );
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 8s ease infinite;
        }

        /* Modern nav link with bottom gradient line */
        .nav-link {
          position: relative;
          display: inline-block;
          padding: 0.5rem 0;
          font-weight: 500;
          letter-spacing: -0.01em;
          transition: color 200ms ease;
        }
        
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853);
          transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link.active::after {
          width: 100%;
        }

        /* Mobile menu link */
        .mobile-link {
          position: relative;
          display: block;
          padding: .85rem .55rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          border-radius: 0.75rem;
          transition: all 200ms ease;
        }
        
        .mobile-link::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 0;
          width: 3px;
          background: linear-gradient(180deg, #4285F4, #EA4335, #FBBC05, #34A853);
          border-radius: 0 2px 2px 0;
          transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mobile-link:hover::before,
        .mobile-link.active::before {
          height: 60%;
        }
        
        .mobile-link:hover {
          background: rgba(66, 133, 244, 0.04);
          transform: translateX(4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .google-gradient-text {
            animation: none !important;
          }
          .nav-link::after, 
          .mobile-link::before,
          .mobile-link { 
            transition: none !important; 
            transform: none !important; 
          }
        }
      `}),(0,s.jsxs)("div",{className:"max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8",children:[(0,s.jsx)(n(),{href:"/",className:"flex items-center gap-2 group",children:(0,s.jsx)("span",{className:"sm:inline font-bold text-lg tracking-tight google-gradient-text",children:"AI Community Chandigarh"})}),(0,s.jsx)("nav",{className:"hidden md:flex items-center gap-10",children:y.map(e=>{let t=r?.startsWith(e.href);return(0,s.jsx)(n(),{href:e.href,className:(0,h.cn)("nav-link",t?"active text-gray-900":"text-gray-600 hover:text-gray-900"),"aria-current":t?"page":void 0,children:e.label},e.href)})}),(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)(c.$,{asChild:!0,className:"hidden sm:inline-flex font-medium border border-blue-600 bg-white hover:bg-blue-50 shadow-sm text-gray-600 hover:text-gray-900",children:(0,s.jsx)(n(),{href:"https://www.commudle.com/communities/tfug-chandigarh",target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-gray-900",children:"Join Us"})}),(0,s.jsx)(c.$,{asChild:!0,className:"hidden sm:flex font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-sm",children:(0,s.jsx)(n(),{href:"/contact",children:"Contact Us"})}),(0,s.jsxs)(f,{open:e,onOpenChange:t,children:[(0,s.jsx)(g,{asChild:!0,children:(0,s.jsxs)("button",{"aria-label":"Toggle mobile menu",className:"inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",children:[(0,s.jsx)("span",{className:"sr-only",children:"Toggle menu"}),(0,s.jsx)(l.A,{className:(0,h.cn)("absolute h-5 w-5 transition-all duration-200",e?"scale-0 rotate-90 opacity-0":"scale-100 rotate-0 opacity-100")}),(0,s.jsx)(d.A,{className:(0,h.cn)("absolute h-5 w-5 transition-all duration-200",e?"scale-100 rotate-0 opacity-100":"scale-0 -rotate-90 opacity-0")})]})}),(0,s.jsx)(v,{side:"right",className:"w-full max-w-xs p-0 border-l-0",children:(0,s.jsxs)("div",{className:"flex flex-col h-full bg-white",children:[(0,s.jsxs)("div",{className:"flex items-center justify-between p-5 border-b border-gray-100",children:[(0,s.jsx)(n(),{href:"/",className:"flex items-center gap-2",onClick:()=>t(!1),children:(0,s.jsx)("span",{className:"font-bold text-base google-gradient-text",children:"AI Community Chandigarh"})}),(0,s.jsx)("button",{onClick:()=>t(!1),"aria-label":"Close menu",className:"inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors",children:(0,s.jsx)(d.A,{className:"h-5 w-5"})})]}),(0,s.jsx)("nav",{className:"flex-1 flex flex-col gap-1 p-4",children:y.map((a,o)=>{let i=r?.startsWith(a.href);return(0,s.jsx)(n(),{href:a.href,onClick:()=>t(!1),className:(0,h.cn)("mobile-link",i?"active text-gray-900":"text-gray-700 hover:text-gray-900"),style:{animationDelay:`${50*o}ms`,animation:e?"slideIn 300ms ease forwards":"none"},"aria-current":i?"page":void 0,children:a.label},a.href)})}),(0,s.jsxs)("div",{className:"p-4 border-t border-gray-100",children:[(0,s.jsx)(c.$,{asChild:!0,className:"w-full mb-3 font-medium border border-blue-600 bg-white hover:bg-blue-50 text-gray-600 hover:text-gray-900",onClick:()=>t(!1),children:(0,s.jsx)(n(),{href:"https://www.commudle.com/communities/tfug-chandigarh",target:"_blank",rel:"noopener noreferrer",className:"text-gray-600 hover:text-gray-900",children:"Join Us"})}),(0,s.jsx)(c.$,{asChild:!0,className:"w-full font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600",onClick:()=>t(!1),children:(0,s.jsx)(n(),{href:"/contact",children:"Contact Us"})})]})]})})]})]})]}),(0,s.jsx)("style",{children:`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `})]})}},2047:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6444,23)),Promise.resolve().then(r.t.bind(r,6042,23)),Promise.resolve().then(r.t.bind(r,8170,23)),Promise.resolve().then(r.t.bind(r,9477,23)),Promise.resolve().then(r.t.bind(r,9345,23)),Promise.resolve().then(r.t.bind(r,2089,23)),Promise.resolve().then(r.t.bind(r,6577,23)),Promise.resolve().then(r.t.bind(r,1307,23))},2432:(e,t,r)=>{"use strict";r.d(t,{BackgroundEffects:()=>n});var s=r(687),a=r(3210);function n(){let e=(0,a.useRef)(null);return(0,s.jsxs)("div",{className:"fixed inset-0 -z-10 pointer-events-none",children:[(0,s.jsx)("div",{ref:e,className:"grid-bg"}),(0,s.jsxs)("div",{className:"lights",children:[(0,s.jsx)("div",{className:"light blue"}),(0,s.jsx)("div",{className:"light red"}),(0,s.jsx)("div",{className:"light yellow"}),(0,s.jsx)("div",{className:"light green"})]})]})}},3290:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,4536,23)),Promise.resolve().then(r.bind(r,6606)),Promise.resolve().then(r.bind(r,4597)),Promise.resolve().then(r.bind(r,9737))},3486:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>k});var s=r(687),a=r(3210);let n=0,o=new Map,i=e=>{if(o.has(e))return;let t=setTimeout(()=>{o.delete(e),m({type:"REMOVE_TOAST",toastId:e})},1e6);o.set(e,t)},l=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:r}=t;return r?i(r):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},d=[],c={toasts:[]};function m(e){c=l(c,e),d.forEach(e=>{e(c)})}function u({...e}){let t=(n=(n+1)%Number.MAX_SAFE_INTEGER).toString(),r=()=>m({type:"DISMISS_TOAST",toastId:t});return m({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:e=>{e||r()}}}),{id:t,dismiss:r,update:e=>m({type:"UPDATE_TOAST",toast:{...e,id:t}})}}var h=r(1864),f=r(4224),g=r(8726),b=r(4780);let p=h.Kq,x=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(h.LM,{ref:r,className:(0,b.cn)("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));x.displayName=h.LM.displayName;let v=(0,f.F)("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),y=a.forwardRef(({className:e,variant:t,...r},a)=>(0,s.jsx)(h.bL,{ref:a,className:(0,b.cn)(v({variant:t}),e),...r}));y.displayName=h.bL.displayName,a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(h.rc,{ref:r,className:(0,b.cn)("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t})).displayName=h.rc.displayName;let w=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(h.bm,{ref:r,className:(0,b.cn)("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:(0,s.jsx)(g.A,{className:"h-4 w-4"})}));w.displayName=h.bm.displayName;let j=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(h.hE,{ref:r,className:(0,b.cn)("text-sm font-semibold",e),...t}));j.displayName=h.hE.displayName;let N=a.forwardRef(({className:e,...t},r)=>(0,s.jsx)(h.VY,{ref:r,className:(0,b.cn)("text-sm opacity-90",e),...t}));function k(){let{toasts:e}=function(){let[e,t]=a.useState(c);return a.useEffect(()=>(d.push(t),()=>{let e=d.indexOf(t);e>-1&&d.splice(e,1)}),[e]),{...e,toast:u,dismiss:e=>m({type:"DISMISS_TOAST",toastId:e})}}();return(0,s.jsxs)(p,{children:[e.map(function({id:e,title:t,description:r,action:a,...n}){return(0,s.jsxs)(y,{...n,children:[(0,s.jsxs)("div",{className:"grid gap-1",children:[t&&(0,s.jsx)(j,{children:t}),r&&(0,s.jsx)(N,{children:r})]}),a,(0,s.jsx)(w,{})]},e)}),(0,s.jsx)(x,{})]})}N.displayName=h.VY.displayName},4597:(e,t,r)=>{"use strict";r.d(t,{Header:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\DELL\\Desktop\\website\\ai-community-chandigarh-website\\src\\components\\Header.tsx","Header")},4780:(e,t,r)=>{"use strict";r.d(t,{cn:()=>n});var s=r(9384),a=r(2348);function n(...e){return(0,a.QP)((0,s.$)(e))}},6338:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,5814,23)),Promise.resolve().then(r.bind(r,2432)),Promise.resolve().then(r.bind(r,1410)),Promise.resolve().then(r.bind(r,3486))},6471:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6346,23)),Promise.resolve().then(r.t.bind(r,7924,23)),Promise.resolve().then(r.t.bind(r,5656,23)),Promise.resolve().then(r.t.bind(r,99,23)),Promise.resolve().then(r.t.bind(r,8243,23)),Promise.resolve().then(r.t.bind(r,8827,23)),Promise.resolve().then(r.t.bind(r,2763,23)),Promise.resolve().then(r.t.bind(r,7173,23))},6606:(e,t,r)=>{"use strict";r.d(t,{BackgroundEffects:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call BackgroundEffects() from the server but BackgroundEffects is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\DELL\\Desktop\\website\\ai-community-chandigarh-website\\src\\components\\BackgroundEffects.tsx","BackgroundEffects")},8042:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b,metadata:()=>g});var s=r(7413);r(1135);var a=r(5091),n=r.n(a),o=r(974),i=r(4597),l=r(4536),d=r.n(l),c=r(7981),m=r(5945);function u(){return(0,s.jsx)("footer",{className:"bg-white border-t py-4",children:(0,s.jsxs)("div",{className:"max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700",children:[(0,s.jsx)("div",{className:"mb-2 md:mb-0",children:"ML Chandigarh"}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("span",{children:"Follow Us:"}),(0,s.jsx)(d(),{href:"https://www.instagram.com/mlchandigarh",target:"_blank","aria-label":"Instagram",className:"hover:text-pink-600",children:(0,s.jsx)(c.gc,{icon:m.QV6,className:"h-5 w-5"})}),(0,s.jsx)(d(),{href:"https://x.com/TFUGChandigarh",target:"_blank","aria-label":"X (Twitter)",className:"hover:text-gray-900",children:(0,s.jsx)(c.gc,{icon:m.NLt,className:"h-5 w-5"})}),(0,s.jsx)(d(),{href:"https://www.youtube.com/@MLChandigarh",target:"_blank","aria-label":"YouTube",className:"hover:text-red-600",children:(0,s.jsx)(c.gc,{icon:m.B4m,className:"h-5 w-5"})}),(0,s.jsx)(d(),{href:"https://in.linkedin.com/company/ml-chandigarh",target:"_blank","aria-label":"LinkedIn",className:"hover:text-blue-500",children:(0,s.jsx)(c.gc,{icon:m.B_4,className:"h-5 w-5"})})]})]})})}var h=r(9737),f=r(6606);let g={title:"AI Community Chandigarh",description:"The central hub for the Artificial Intelligence community in Chandigarh. Discover projects, events, jobs, and connect with peers."};function b({children:e}){return(0,s.jsx)("html",{lang:"en",suppressHydrationWarning:!0,children:(0,s.jsxs)("body",{className:(0,o.cn)("min-h-screen bg-background font-body antialiased",n().className),children:[(0,s.jsx)(f.BackgroundEffects,{}),(0,s.jsxs)("div",{className:"relative z-10 flex min-h-dvh flex-col",children:[(0,s.jsx)(i.Header,{}),(0,s.jsx)("main",{className:"flex-1",children:e}),(0,s.jsx)(u,{})]}),(0,s.jsx)(h.Toaster,{})]})})}},9523:(e,t,r)=>{"use strict";r.d(t,{$:()=>d});var s=r(687),a=r(3210),n=r(1329),o=r(4224),i=r(4780);let l=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=a.forwardRef(({className:e,variant:t,size:r,asChild:a=!1,...o},d)=>{let c=a?n.DX:"button";return(0,s.jsx)(c,{className:(0,i.cn)(l({variant:t,size:r,className:e})),ref:d,...o})});d.displayName="Button"},9737:(e,t,r)=>{"use strict";r.d(t,{Toaster:()=>s});let s=(0,r(2907).registerClientReference)(function(){throw Error("Attempted to call Toaster() from the server but Toaster is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\DELL\\Desktop\\website\\ai-community-chandigarh-website\\src\\components\\ui\\toaster.tsx","Toaster")}};