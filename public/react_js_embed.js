    function vhsshtml5_loadcharacter()
    {
			var url = vhsshtml5_getscript('vhost_embed_functions_v2');
			if(url)
			{
				vhsshtml5_loadScript(url,vhsshtml5_CallEmbed);
			}
			else
			{
				var url = vhsshtml5_getscript('fb_embed_functions_v3');
				if(url)
				{
					vhsshtml5_loadScript(url,vhsshtml5_CallEmbedfb);
				}
			} 
    }
    function vhsshtml5_CallEmbedfb()
    {
       if (window.console) { console.log('Embed file loaded.'); }
    }
    function vhsshtml5_CallEmbed()
    {
		
        var funcvar = vhsshtml5_getscriptfunc('AC_VHost_Embed');   
        AC_VHost_Embed(funcvar[0],funcvar[1],funcvar[2],funcvar[3],funcvar[4],funcvar[5], funcvar[6], funcvar[7],funcvar[8],funcvar[9],funcvar[10],funcvar[11]);
        if (window.console) { console.log('Embed file loaded.'); }
    }
    function vhsshtml5_loadScript(sScriptSrc, oCallback) 
    {
            var vhsshtml5_ua = window.navigator.userAgent;
            var vhsshtml5_msie = vhsshtml5_ua.indexOf("MSIE ");
            var oHead = document.getElementsByTagName('head')[0];
            var oScript = document.createElement('script');
            oScript.type = 'text/javascript';
            oScript.src = sScriptSrc;
            // IE 6 & 7
            if (vhsshtml5_msie > 0) // If Internet Explorer, return version number
            {
                    oScript.onreadystatechange = function() {
                            if (this.readyState == 'complete') 
                            {
                                    oCallback();
                            }	
                    }
            }
            else  // If another browser, return 0
            {
                    oScript.onload = oCallback;
            }
            oHead.appendChild(oScript);
    }
    function vhsshtml5_getscriptfunc(keysw)
    {
        var vhsshtml5_scripts = document.getElementsByTagName("script");
        for(var i=0;i< vhsshtml5_scripts.length;i++)
        {
            if(vhsshtml5_scripts[i].innerHTML.substr(0,14) == "AC_VHost_Embed")
            {
                var str1 = vhsshtml5_scripts[i].innerHTML;
                var str2 = str1.split("(");
                var str3 = str2[1].split(")");
                var str4 = str3[0].split(",");
                for(var i=0; i < str4.length; i++) {
                    str4[i] = str4[i].replace(/'/g, '');
                    str4[i] = str4[i].replace(/ /g, '');
                }
                return str4; 
            }
        }
    }
    function vhsshtml5_getscript(keysw)
    {
        var vhsshtml5_scripts = document.getElementsByTagName("script");
        for(var i=0;i< vhsshtml5_scripts.length;i++)
        {
          var vhsshtml5_str = vhsshtml5_scripts[i].src;
          if(vhsshtml5_str.indexOf(keysw) >= 0)
          {
            return vhsshtml5_scripts[i].src; 
          }
        }
    }