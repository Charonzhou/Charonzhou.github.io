var posts=["2022/10/06/About-Linux-Network/","2022/10/08/about-centos-netcfg/","2022/10/11/Query-system-version/","2022/10/11/about-centos-SSH/","2022/11/18/linux-ten-monitor-tools/","2022/11/20/penetration/","2022/11/28/ufw-and-firewall/","2022/11/28/mount-disk/","2022/12/14/centos-passwd-crack/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};