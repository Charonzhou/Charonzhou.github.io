var posts=["2022/10/06/About-Linux-Network/","2022/10/08/about-centos-netcfg/","2022/10/11/Query-system-version/","2022/10/11/about-centos-SSH/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};