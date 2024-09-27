//58 20 * * * m_jd_wx_daydaysign_exchange.js
let mode = __dirname.includes('magic')
const {Env} = mode ? require('./magic') : require('./magic')
const $ = new Env('M天天签到兑换');
//要兑换的奖品名称，支持模糊匹配，默认兑换京豆
let exchangeList = process.env?.M_DAYDAYSIGN_EXCHANGE ||"京豆"
var version_='jsjiami.com.v7';const lIilil1=iii1i1II;function il1i1Ii(){const II111Il=(function(){return[...[version_,'WMjnsNSjiagmqufiRB.qHcFoqWm.Mv7lwkGUuQXn==','v8kOzSkt','6i6T5y6zW7ZdPtOXWQBLPRROT58','W75LtCoKW7hdUXO','WR/cNSoAW6Xsi8kn','WQOHah0X','WQCVWR8UW65XoXO','BCktW6NcPCocW4nplIjGv8omW4O','W6HNW7i/u3jCEG','W4VcRfO','WPtdV8ooldL7WOG','W5BdV8kBxbhdI8o+dColWOO','W4xdJ8kVwse','WOZcKvibWQX6W7/dK8oBWQy','WR3cTuzGAGiOi8ot','EmoKsq','jI9LW6rRyg8','WOZcOmom','eYqsWR8efCo/WQBcOqfsdSkE','W7GFWQFcG2xdJG','WPxdHbyUBKS+eI3dNK0','Emo5frTk','WPBcVmorlsK','W6NdQ1ZdUHjRWRObW61vWQbtCfNcSKNdLJ45W4e/','W4iqyuzPwqCo','5BYp5yQA54M45PYyWRW','kCkKvuBdQmorWPDK','W6qpWR3cQwldGq','W5/dHMaIWO1DW43dVG','uSkQzSkBBSkeiL/cRCkcWPy','WPNcMYdcQXDL','eCoBW5D2ncy','W5ldLXaUyKCEeHtdN00','W4TIrW','eSk8uaeF','WQxcHmofD8k7','eSkVvaqqWP3dP8k9lSo6tG','abRcQwKNWP7dT8oHcCoXWRddQ8ooc8k+W6/cRmotvmoPpSkGWPldN3OeW7G0WQ45W5KsWQ/cPYbjW5eUAmoxW4/dJCoaC8kBwGPdW51eWOq8atujtr7cN8kAiZ8KW6tdP2WmzMxdVmoEsCopBg5hWO/dTLKTs2isWRpdVdn0t1jUvevSWO1OnmoyzKdcUmoqo3/cO8k6ztfvomoTW6jZohjbDZJdUNVcJ8oJpghdNCobW7hcGmk6W53dICk/va','W7X3W6mKCg5bz8kegG','nSoRESo5','W7NdP8olWOLy','xetdSCkPWQ8','lmkLwu7dO8oJWPLUWPqc','W4iqDKbQxGCeqX50','ymoIq8kWAHSIW7BcIa','tau/W6XstSk0WQq','W5HTxCo3W60','lmkLwu7dO8o+WPTSWOm','W4DBW6ymsW','zmo5r8kVFdS6W6VcNq','W7X2W6T0W7LKms3dRvG','WQDfWOlcMxO','WRKZWQ8T','imk4W6RdPSoSCmkIDW','rSoUxCkLDGeWW77dMmoprH0H','FmkqDmkNBG','DCoOwSk8BWy3W6lcRCoBrq','ntTgW4jA','bW5kW7zH','WRJcImosW79okCktWPy','WP7cUCksW7hcJW','W67dMYS','odrwW4y','WRVcLvqEWP0','WRJdU8kTW6v/kmoKmW','W7n9W7qMAgzyEW','da/cQxG','gGVcShGMW4/cQW','nSovfJrnFmoAW5K9u8oSWQugWQtdHulcKIhcMM8UrW','EYZdNmoJjZ3cVmoYWQ/cT8ov','hrVcTh0','BIddU8o+iZ3cPSoS','xComB8kTxG','k8oyWPNdUSkyWPyqoJXBvmovWRfcxt/dGdddRsTe','n8oHWPC6W7rtFdtcLq','q3vrW6zgrCk5WPBcIHy','qSoPwCkYtq','WQFcOCkoW4BcKYtcLW','W4D2W7a4tG','W6xdO8oFWONdHL/dH8k7W7ZdMSkOj1u','E8oWW61CeG'],...(function(){return[...['sfdcSblcQG','tmkkhG','WPlcRSoFW6D9AH5z','WOzzWQBcVxaviItcTmkIWO3cMhO7BJFcMmoxW5tdQmk6vSkIW6HzrbbyWR5Ib3JdQhxcQ2WRWQyFW60XW4ldKCkTW4mdWPm','bCkIW6e','mCo3WPe6W79gqtG','WR7dOmkPW6v/kmoKmW','W658W7y/u3jCEG','bhDgW7TFxSkyWPRcQHyM','c07cOCoXDCkR','yXugoG','W6RcJx1pvq','W5tdUcyFzq','WOVdQCokedjYWPpdTSkEW6tcM1hdQW','mCkQW7VdTq','W4ylyuf9wrqyrH5XjColW4hcLg58','u8ouW4P0','lCk1W4m','WPbcoHeRdJuowc99ia','FSoFdHT+','iSk7hSoTCYulW7FcISoS','W5mbA1n5EriqCW','u8oCW5bYjxpcVmkaW64mqhLzlSoixG9NW5SvpSkMW5vDWPPOWP8','WQZcMmouW6jvjSkkWOa','kdXpW4jrWRvvWO0e','gbZcTgmXW7dcOCk+aa','W5ZcJNTdAq','W6dcM8ocASoYWOqOW651y8ob','AcRdM8o/psa','mSo3WO4bW4m','WRXBW6pdVeldMSk+WO4BmW','W6KAWQpcOM8','meHvC8kdCSkInmkjW6jLsqy','W6VdVvVdPWTVWQSkWOTw','r8kMECkxDG','WOnCWQtcNwmBpW','W5W4bW','imk4W6RdPSolDq','W5fnW7SizW','g+s8QoI3QoEjNEADSYe','WO5FWQ8','W65XW7y/zw8','WQdcMSodW65i','WQhcLmoq','nSocbbrCBCoMW5O9q8kO','imo+WPySW7vfst/dJ07dNrBdQ8okWOWbWPtdU2VcSmoVW6tcISkDvqDIwgFcJa','WR3cJSodW4btlW','ySo0WOyHW6TcztNdHG','W6FcLCoyEa','W7f3W6XZWRuMzZFdSuhcUSk/W5S','BwhcTqhcSCou','iSkbWQxcLG','lZRcLhqE','nZ5VW7T9wKDvWRi','WQGLWQGSW7z5iGBdTvpdGq','W5CCuv1UxH0A','tZNdUmoNpW','5Rsw5yMs5BAf57M95PYa','W5tcS3D8Fa','CXKQoCor','WQRdO8kL','WPJcGumAWPn3','W7NdRCot','xLFdT8kiWQJdIHn6W4ddOaxdVW','tLBdOmkvWRtdPHTS','aaxcN2eH','zgqsWPexW7CfWQG5W5hcGMtcIq','W4dcT8ovW6jrCW','WQdcVcJdH8ktASoiAG7dTa','W5JdGHfzWQnNW6ZdUmodWQ0','oSojWRBdOCkqWOK','ic52W5DC','BmkSW5XMWROob3tdKftcLfq','W5HbW5e9AG','W6JcOdJdICkpxSoqzG','W7ddUhxcKSopdW','W4VcRI3dRSkT','yCo4s8kNuaS','W6T5qmokW73dMb7cNCoE','CSoXW4P3kW','C2VcOr3cVG','6k6e5PI45PAq6iw35P2k'],...(function(){return['W4NdNSkV','WQ4mWQhcOxVdVCkTWRSBwuboWQS','dSonW6VdJ8k4abNdKq','k3ZcM8k6zMZdUmoXWQ3cKmoCzXS','pCodWQ7dVmkdWPilltXr','WOnaWQe','W68NWR8XW69IaWRdLvpdGq','WR3cTv1Nlq','WP7cHLqbWRr0W6ldJmoR','omobWQ7dTa','W755W40','6i+R5y6dDSoisCkKwUwNKEI1Kq','W6pcPZ/dTSkiuSoy','W7O0b3DPWO7dPuy','WRBcO8ko','W7pcUJ7dKmkpxSoqzG','W5/dKtfxW6yBWP89WOaqWOi','W4fewmoXW5u','W78Lg3PIWPVdHurV','WQdcUtldJmoC','cSkpdSkzW5q','W4ddH8krqH4','it5aW7bI','W4ODzKXK','W5ebW7ddOJ1edxJcKmkfWOdcKq','W7DKtG','W61HW6maDwa','FCoTqmkSxW','lCoQWPaTW6K','WQZcMmodW6rwiCkkWOPiua','W5FcQNHHqG','aSo5zSkMCCkbmLu','W4xdI8kRrWZdGCkwFJ3cGqxcIa','WQlcOmkcW47cOXJcMSkh','WReqWOKJW7O','jCkRW44CW6K','W5/dGH5DW6OHWR/dSSo/WPTibSoW','smkue8o6nSosW6i','WPZcHcq','WQOPWQKRW7r0oqJdKG','WOxdRSocW51DAX0x','WPJdPmkkW6zM','WQ4NWQGlW7u','g0mlW4L3tCkxWOmIWR7cMSkx','WR4sWOOCW6W','bSkbELddGW','EmofgavDmSkCWOa9sSoYW4bpW7RcK0NcKMxcN38Pf8kSWQpcUHLQWOJdTSoyWQNdIeddPfONWQffWOJcUmoLBdtdLcLPW6SShsdcGa0VW7TfhhNdVmkKESkXWQNdPb7cT3BcIXtdTsldVCkEEbRdTmoxccZcSvbPwfddGqWmW7ZcLmkvWPeTBgxcLSkjW7FdNCk9cq','W63cOez6EqGp','y8oAW5vWmq','W7L9W7KQFg9CmCkNgITYcxPlWPzyWOCMW7RcT0u1v1FcVmk3bq3cQ3aEmCk2uSk0WOBcJL3cQWFdKuJdOmog','d8oxW63dLSkZfq','mdbmW4bwWQK','WOZcKvibWQX6W7/dK8ohWRbP','m8oTBmoJcYpdLH4','WPjfWRZcL3KA','gSokW7RdJ8kcdGhdRmkXWPKPW68','DmkDw8kFuG','oxhcTrhcR8oPWQRdQa','tdpdR3jFtmkgWPWLWO5MvW','z8oUt8kNEGC','W5NcV8ocW6PC','f8orW6K','WOzrWRZcUW','WQGLWQGSW7z5iGBdQe7cJmkD','W7RcPKbGzG4vpSkNra','W4L7W7WOAa','r8kMECkxDSoq','WP/cNSoeW71pjSknWPyHuMuUWR8','WQ4AWQhcP2ZdJmkaWRioatW','mCkIW6hdS8o4ECkMpCovkZvHWQpdLmowyHqykCoMFmoTvSoTWRW6WPjun8kkymk+kSo1e8oVWPaPW7nKW5XSaq','ACo0jIf+','jsH8W7T8F25iWQBdJSorW5C','WQaOWRGGW7G','WOusyv1ZrsyiFWGL','BZZdJCo4pZxcPCoU','c0iCW5rqDCkBWPq','xSkpb8ollCoPW6j/dmkcW4lcPa','W5WfWRJcQ3G','tWRdPCkouSk/W7HGW6pcVq'];}())];}())];}());il1i1Ii=function(){return II111Il;};return il1i1Ii();};(function(iIiiIliI,I11III1i,i1liiIIi,llII11il,Ii1i1lI,Ii1ili11,IIi11ilI){return iIiiIliI=iIiiIliI>>0x8,Ii1ili11='hs',IIi11ilI='hs',function(IiIIllI1,I1i1iIl1,ii1li1Il,illiiIii,ll1li11I){const Iil11Iii=iii1i1II;illiiIii='tfi',Ii1ili11=illiiIii+Ii1ili11,ll1li11I='up',IIi11ilI+=ll1li11I,Ii1ili11=ii1li1Il(Ii1ili11),IIi11ilI=ii1li1Il(IIi11ilI),ii1li1Il=0x0;const IIIIllii=IiIIllI1();while(!![]&&--llII11il+I1i1iIl1){try{illiiIii=-parseInt(Iil11Iii(0x230,'x[ti'))/0x1*(parseInt(Iil11Iii(0x21a,'G[B('))/0x2)+-parseInt(Iil11Iii(0x261,'oYO*'))/0x3+-parseInt(Iil11Iii(0x210,'Ka(K'))/0x4+-parseInt(Iil11Iii(0x205,'VxS3'))/0x5+-parseInt(Iil11Iii(0x1d4,'G[B('))/0x6+parseInt(Iil11Iii(0x26d,'ki[7'))/0x7*(parseInt(Iil11Iii(0x209,'YRh3'))/0x8)+-parseInt(Iil11Iii(0x280,'x[ti'))/0x9*(-parseInt(Iil11Iii(0x1cf,'U)lM'))/0xa);}catch(iiIili1I){illiiIii=ii1li1Il;}finally{ll1li11I=IIIIllii[Ii1ili11]();if(iIiiIliI<=llII11il)ii1li1Il?Ii1i1lI?illiiIii=ll1li11I:Ii1i1lI=ll1li11I:ii1li1Il=ll1li11I;else{if(ii1li1Il==Ii1i1lI['replace'](/[WgHFGulSfQRMBUXkwnNq=]/g,'')){if(illiiIii===I1i1iIl1){IIIIllii['un'+Ii1ili11](ll1li11I);break;}IIIIllii[IIi11ilI](ll1li11I);}}}}}(i1liiIIi,I11III1i,function(iiliIiI1,IIi1iIil,iIlllIl1,llIliiii,ilIi1ii,il1IiIl1,lIl1ilI){return IIi1iIil='\x73\x70\x6c\x69\x74',iiliIiI1=arguments[0x0],iiliIiI1=iiliIiI1[IIi1iIil](''),iIlllIl1=`\x72\x65\x76\x65\x72\x73\x65`,iiliIiI1=iiliIiI1[iIlllIl1]('\x76'),llIliiii=`\x6a\x6f\x69\x6e`,(0x131df0,iiliIiI1[llIliiii](''));});}(0xcc00,0x3b2d3,il1i1Ii,0xce),il1i1Ii)&&(version_=il1i1Ii);function iii1i1II(_0x3deebd,_0xe6a372){const _0x5d38e4=il1i1Ii();return iii1i1II=function(_0x284946,_0x4d20dc){_0x284946=_0x284946-0x1c9;let _0x2274da=_0x5d38e4[_0x284946];if(iii1i1II['XgEbNe']===undefined){var _0xa60a2=function(_0x17e184){const _0x184e1f='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x315d07='',_0x2d9cb8='',_0x54774e=_0x315d07+_0xa60a2;for(let _0x4aff47=0x0,_0x5ad6df,_0x1f09d0,_0x51f04f=0x0;_0x1f09d0=_0x17e184['charAt'](_0x51f04f++);~_0x1f09d0&&(_0x5ad6df=_0x4aff47%0x4?_0x5ad6df*0x40+_0x1f09d0:_0x1f09d0,_0x4aff47++%0x4)?_0x315d07+=_0x54774e['charCodeAt'](_0x51f04f+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x5ad6df>>(-0x2*_0x4aff47&0x6)):_0x4aff47:0x0){_0x1f09d0=_0x184e1f['indexOf'](_0x1f09d0);}for(let _0x13f484=0x0,_0x4fae3d=_0x315d07['length'];_0x13f484<_0x4fae3d;_0x13f484++){_0x2d9cb8+='%'+('00'+_0x315d07['charCodeAt'](_0x13f484)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2d9cb8);};const _0x14bbcb=function(_0x5bbb50,_0x22ce82){let _0x34cb87=[],_0x4dbcc1=0x0,_0x3571ba,_0xa68bc0='';_0x5bbb50=_0xa60a2(_0x5bbb50);let _0x376f2d;for(_0x376f2d=0x0;_0x376f2d<0x100;_0x376f2d++){_0x34cb87[_0x376f2d]=_0x376f2d;}for(_0x376f2d=0x0;_0x376f2d<0x100;_0x376f2d++){_0x4dbcc1=(_0x4dbcc1+_0x34cb87[_0x376f2d]+_0x22ce82['charCodeAt'](_0x376f2d%_0x22ce82['length']))%0x100,_0x3571ba=_0x34cb87[_0x376f2d],_0x34cb87[_0x376f2d]=_0x34cb87[_0x4dbcc1],_0x34cb87[_0x4dbcc1]=_0x3571ba;}_0x376f2d=0x0,_0x4dbcc1=0x0;for(let _0x5953bf=0x0;_0x5953bf<_0x5bbb50['length'];_0x5953bf++){_0x376f2d=(_0x376f2d+0x1)%0x100,_0x4dbcc1=(_0x4dbcc1+_0x34cb87[_0x376f2d])%0x100,_0x3571ba=_0x34cb87[_0x376f2d],_0x34cb87[_0x376f2d]=_0x34cb87[_0x4dbcc1],_0x34cb87[_0x4dbcc1]=_0x3571ba,_0xa68bc0+=String['fromCharCode'](_0x5bbb50['charCodeAt'](_0x5953bf)^_0x34cb87[(_0x34cb87[_0x376f2d]+_0x34cb87[_0x4dbcc1])%0x100]);}return _0xa68bc0;};iii1i1II['yEHQSN']=_0x14bbcb,_0x3deebd=arguments,iii1i1II['XgEbNe']=!![];}const _0x247c4=_0x5d38e4[0x0],_0x29488c=_0x284946+_0x247c4,_0x412deb=_0x3deebd[_0x29488c];if(!_0x412deb){if(iii1i1II['dYCMVe']===undefined){const _0x3427cd=function(_0x22bda0){this['abOrkR']=_0x22bda0,this['HtUFyP']=[0x1,0x0,0x0],this['DeyKNI']=function(){return'newState';},this['nFvSTd']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['QTkAWZ']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x3427cd['prototype']['MBZvUe']=function(){const _0x2375ce=new RegExp(this['nFvSTd']+this['QTkAWZ']),_0x5b5ed0=_0x2375ce['test'](this['DeyKNI']['toString']())?--this['HtUFyP'][0x1]:--this['HtUFyP'][0x0];return this['dsvmyE'](_0x5b5ed0);},_0x3427cd['prototype']['dsvmyE']=function(_0x38825e){if(!Boolean(~_0x38825e))return _0x38825e;return this['WDhkxC'](this['abOrkR']);},_0x3427cd['prototype']['WDhkxC']=function(_0x20fc08){for(let _0x48d60d=0x0,_0x207b01=this['HtUFyP']['length'];_0x48d60d<_0x207b01;_0x48d60d++){this['HtUFyP']['push'](Math['round'](Math['random']())),_0x207b01=this['HtUFyP']['length'];}return _0x20fc08(this['HtUFyP'][0x0]);},new _0x3427cd(iii1i1II)['MBZvUe'](),iii1i1II['dYCMVe']=!![];}_0x2274da=iii1i1II['yEHQSN'](_0x2274da,_0x4d20dc),_0x3deebd[_0x29488c]=_0x2274da;}else _0x2274da=_0x412deb;return _0x2274da;},iii1i1II(_0x3deebd,_0xe6a372);}const illiilIl=(function(){const lI11II=iii1i1II,ill1l1I={'wcLnl':function(l11lIIl,I1IiI1il){return l11lIIl!==I1IiI1il;},'IjuMy':lI11II(0x231,'#f8*'),'VgrvG':lI11II(0x1dd,'$oCN'),'xVUfz':function(l11llllI,Ii1IIIll){return l11llllI===Ii1IIIll;},'gatNu':lI11II(0x2b6,'xJKy')};let i1ll1IIi=!![];return function(il11iIl,lillIili){const liii1il=lI11II;if(ill1l1I[liii1il(0x1d2,'x[ti')](ill1l1I[liii1il(0x1da,'x[ti')],ill1l1I[liii1il(0x227,'Gz25')])){const Ii1iiIlI=i1ll1IIi?function(){const I1i1illl=liii1il;if(lillIili){if(ill1l1I[I1i1illl(0x2b7,'eSr9')](ill1l1I[I1i1illl(0x23a,'eRyk')],ill1l1I[I1i1illl(0x23d,'G[B(')])){const ii1Ii11I=lillIili[I1i1illl(0x20a,'xJKy')](il11iIl,arguments);return lillIili=null,ii1Ii11I;}else{const IilII1Il=lIIIiii?function(){const l1i11lii=I1i1illl;if(l1Iiiili){const i1ili11l=II1iIii[l1i11lii(0x220,'BTRb')](IlII1iI1,arguments);return il111i1i=null,i1ili11l;}}:function(){};return ilIl11I=![],IilII1Il;}}}:function(){};return i1ll1IIi=![],Ii1iiIlI;}else{const IIl1l11i=IliIlI1i[liii1il(0x26e,'ki[7')](iIli1lll,arguments);return I1I11iIi=null,IIl1l11i;}};}()),IiIl1Iil=illiilIl(this,function(){const iilllll=iii1i1II,li1li1Ii={'yEJTP':iilllll(0x297,'r7cr')};return IiIl1Iil[iilllll(0x245,'8UqH')]()[iilllll(0x278,'Nybg')](li1li1Ii[iilllll(0x1f6,'XJc%')])[iilllll(0x286,'oYO*')]()[iilllll(0x26a,'FeZQ')](IiIl1Iil)[iilllll(0x1eb,'23OW')](li1li1Ii[iilllll(0x2b5,'C*Kp')]);});IiIl1Iil(),$[lIilil1(0x1e4,'G[B(')]=lIilil1(0x223,'u^h&'),$[lIilil1(0x236,'23OW')]=$[lIilil1(0x279,'8Uqj')](/(https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])/,$[lIilil1(0x229,'oYO*')]),$[lIilil1(0x21c,'!X6F')]=$[lIilil1(0x1ec,'k(cf')](/https?:\/\/([^/]+)/,$[lIilil1(0x243,'8UqH')]),$[lIilil1(0x270,'Yr&j')]=lIilil1(0x27c,'r7cr'),$[lIilil1(0x274,'KoGy')]=0xa8235;let tasks=[];$[lIilil1(0x1df,'$YkK')]=lIilil1(0x29a,'2)IE'),console[lIilil1(0x1c9,'n3@p')](lIilil1(0x217,'$oCN')+$[lIilil1(0x208,'bMu)')]+lIilil1(0x276,'66v7')+$[lIilil1(0x1fc,'yNaz')]),$[lIilil1(0x29f,'8aEI')]=async function(){const il111I1I=lIilil1,i1i1lIII={'OYfUv':function(I11I,ilIi1i11){return I11I<ilIi1i11;},'ZbguH':il111I1I(0x2a0,'BTRb'),'SwFqL':function(I1IiIII,IIlli1l){return I1IiIII!==IIlli1l;},'LoLhR':function(Il1il1il,IIIIIIII){return Il1il1il+IIIIIIII;},'IGAxG':il111I1I(0x247,'VxS3'),'VbwgT':il111I1I(0x215,'Yr&j'),'vszIR':function(i1111Il1,l1iIiil){return i1111Il1(l1iIiil);},'QSFho':il111I1I(0x265,'66v7'),'UvPmn':function(liIli1,lIi1Iiil){return liIli1>lIi1Iiil;},'wTVYl':il111I1I(0x1de,'XJc%'),'LESIM':il111I1I(0x1e1,'Nybg'),'MgvLL':il111I1I(0x252,'#f8*'),'OvCul':function(li1iil1,Illil11i){return li1iil1!==Illil11i;},'nnbnP':il111I1I(0x24f,'8aEI'),'gLBXq':il111I1I(0x298,'Nybg'),'rcHzf':function(i1l1I1I1,liii1lI1){return i1l1I1I1<liii1lI1;}};if(!$[il111I1I(0x1f7,'eSr9')])throw new Error(i1i1lIII[il111I1I(0x24c,'Nybg')]);$['UA']=$['ua']();let lllll11=await $[il111I1I(0x25c,'bMu)')]();if(i1i1lIII[il111I1I(0x1d9,'NBnC')](lllll11[il111I1I(0x282,'%iXS')],'0')){$[il111I1I(0x27d,'8Uqj')](il111I1I(0x2ac,']5Nq'));return;}await $[il111I1I(0x2af,'eRyk')](i1i1lIII[il111I1I(0x1ce,'$YkK')](i1i1lIII[il111I1I(0x246,'23OW')],$[il111I1I(0x22a,'23OW')]()));let I11liliI=await $[il111I1I(0x1d6,'!X6F')](i1i1lIII[il111I1I(0x24a,'23OW')],il111I1I(0x1f2,'U)lM')+$[il111I1I(0x1e0,'66v7')]+il111I1I(0x1e9,'8aEI')+$[il111I1I(0x29c,'23OW')]+il111I1I(0x1ea,'[iD@')+$[il111I1I(0x1cd,'8Uqj')]+il111I1I(0x2a2,'ki[7'));$[il111I1I(0x253,'KoGy')]=i1i1lIII[il111I1I(0x214,'YRh3')](encodeURIComponent,I11liliI[il111I1I(0x1ee,'#f8*')][il111I1I(0x248,'r7cr')]),$[il111I1I(0x204,'x[ti')]=I11liliI[il111I1I(0x1ff,'U)lM')][il111I1I(0x23f,'Nybg')];let I1iiiiii=await $[il111I1I(0x2a6,'#f8*')](i1i1lIII[il111I1I(0x238,'eSr9')],il111I1I(0x2b1,'XIwL')+$[il111I1I(0x20b,'G[B(')]+il111I1I(0x242,'XJc%'));$[il111I1I(0x2ae,'*![k')]=$[il111I1I(0x28c,'G[B(')],$[il111I1I(0x1d5,'yNaz')]=I1iiiiii[il111I1I(0x27f,'FeZQ')][il111I1I(0x2ad,'2)IE')];if(i1i1lIII[il111I1I(0x287,'8UqH')]($[il111I1I(0x267,']5Nq')](),$[il111I1I(0x201,'n3@p')])){$[il111I1I(0x1e6,'#f8*')](il111I1I(0x288,'yNaz'));return;}$[il111I1I(0x1ef,'x[ti')]=0x63,await $[il111I1I(0x284,'eSr9')](),$[il111I1I(0x1d0,'xJKy')]=i1i1lIII[il111I1I(0x1dc,'x[ti')];let Il11IIll=await $[il111I1I(0x260,'hCV6')](i1i1lIII[il111I1I(0x24e,'66v7')],il111I1I(0x285,'x[ti')+$[il111I1I(0x1f0,'$YkK')]+il111I1I(0x21d,'66v7')+i1i1lIII[il111I1I(0x26c,'r7cr')](encodeURIComponent,$[il111I1I(0x299,'2)IE')])+il111I1I(0x27b,'XJc%')+($[il111I1I(0x256,'Nybg')]||'')+il111I1I(0x251,'k(cf')+i1i1lIII[il111I1I(0x296,'eSr9')](encodeURIComponent,$[il111I1I(0x1e7,'sWQr')])+il111I1I(0x293,'2)IE')+($[il111I1I(0x23e,'NBnC')]||'')+il111I1I(0x203,'*![k')+$[il111I1I(0x21f,'n3@p')]);$[il111I1I(0x1d1,'eRyk')]=Il11IIll[il111I1I(0x25f,'66v7')][il111I1I(0x244,'u^h&')];let illii11i=await $[il111I1I(0x28b,'NBnC')](i1i1lIII[il111I1I(0x29b,'2)IE')],il111I1I(0x21e,'9KgQ')+$[il111I1I(0x249,'Ka(K')]+il111I1I(0x257,'Ka(K')+$[il111I1I(0x255,'NBnC')]+il111I1I(0x2a8,'$YkK')+$[il111I1I(0x23b,'XIwL')]),li11I11l=illii11i[il111I1I(0x240,'u^h&')][il111I1I(0x25e,'oYO*')][il111I1I(0x295,'VxS3')](IllIllI=>Il11IIll[il111I1I(0x25d,'KoGy')][il111I1I(0x272,'#f8*')]>=IllIllI[il111I1I(0x228,'$oCN')]&&IllIllI[il111I1I(0x264,'oYO*')][il111I1I(0x279,'8Uqj')](new RegExp(exchangeList)));for(let IIiiIiI of li11I11l){if(i1i1lIII[il111I1I(0x289,'$YkK')](i1i1lIII[il111I1I(0x262,'XJc%')],i1i1lIII[il111I1I(0x25b,'9KgQ')]))for(let III111Ii=0x0;i1i1lIII[il111I1I(0x28a,'6iLh')](III111Ii,0x1);III111Ii++){tasks[il111I1I(0x225,'Fitj')]({'body':il111I1I(0x21b,'U)lM')+$[il111I1I(0x2a5,'VxS3')]+il111I1I(0x2a7,'x[ti')+$[il111I1I(0x1fb,'G^RP')]+il111I1I(0x221,'FeZQ')+$[il111I1I(0x207,'$YkK')]+il111I1I(0x27e,'r7cr')+IIiiIiI[il111I1I(0x20e,'eSr9')]+il111I1I(0x1f4,'ki[7')+IIiiIiI[il111I1I(0x268,'u^h&')],'index':$[il111I1I(0x1f8,'x[ti')],'username':$[il111I1I(0x266,'8Uqj')][$[il111I1I(0x2a3,'sWQr')]]?.[il111I1I(0x202,'8Uqj')]||$[il111I1I(0x28f,'Gz25')],'token':$[il111I1I(0x1fd,'ki[7')],'ticket':$[il111I1I(0x292,'k(cf')]});}else for(let liiiIiii=0x0;i1i1lIII[il111I1I(0x235,'U)lM')](liiiIiii,I11l1i1i[il111I1I(0x219,'ki[7')]);liiiIiii++){const iI1I1lIl=li1iIiii[liiiIiii],llIiiI=llIillIl[liiiIiii];lllii11I[il111I1I(0x1ed,'sWQr')](il111I1I(0x1f3,'8Uqj')+llIiiI[il111I1I(0x233,'KoGy')]+':'),iiIlliil[il111I1I(0x1d3,'hCV6')]=llIiiI[il111I1I(0x237,']5Nq')],IlI1iIli[il111I1I(0x1e5,'Fitj')]=llIiiI[il111I1I(0x239,'8Uqj')],IlIlll11[il111I1I(0x277,'#f8*')](lliIIlI[il111I1I(0x2a9,'G[B(')](llIiiI)),iI1I1lIl[il111I1I(0x281,'8aEI')]?IIIIi1Ii[il111I1I(0x1ca,'Nybg')](iI1I1lIl[il111I1I(0x23c,']5Nq')][il111I1I(0x29d,'n3@p')]):liI1lI1[il111I1I(0x27a,'8Uqj')](iI1I1lIl[il111I1I(0x1db,'G^RP')]);}}},$[lIilil1(0x226,'PoKt')]=async function(){const IIl1il1I=lIilil1,IlI1llII={'hkBxu':function(i1li1ii1,IlIiill1){return i1li1ii1(IlIiill1);}};await $[IIl1il1I(0x1d7,'x[ti')](0x1,0x32);const IlilIi1i=await Promise[IIl1il1I(0x28d,'PoKt')](tasks[IIl1il1I(0x2a1,'xJKy')](i1IlI1l1=>$[IIl1il1I(0x250,'yNaz')](IIl1il1I(0x1f5,'KoGy'),i1IlI1l1[IIl1il1I(0x259,'6iLh')],i1IlI1l1[IIl1il1I(0x271,'U)lM')],i1IlI1l1[IIl1il1I(0x1e2,'sWQr')])));await IlI1llII[IIl1il1I(0x290,'u^h&')](handler,IlilIi1i);};async function handler(iiilIiii){const lIli1I11=lIilil1,lIIlII1={'GTImJ':function(lIllIIi,ili1iiil){return lIllIIi<ili1iiil;},'CftGu':function(l1Ii1lIl,ilI1lI1l){return l1Ii1lIl===ilI1lI1l;},'LYlEa':lIli1I11(0x213,'XJc%'),'qHIFE':lIli1I11(0x29e,'66v7'),'GKOJy':function(Ii1IIiI1,ilIiii1){return Ii1IIiI1!==ilIiii1;},'ZOqAM':lIli1I11(0x1cb,'23OW')};for(let i1llIii1=0x0;lIIlII1[lIli1I11(0x1e8,'U)lM')](i1llIii1,iiilIiii[lIli1I11(0x1e3,']5Nq')]);i1llIii1++){if(lIIlII1[lIli1I11(0x22c,'n3@p')](lIIlII1[lIli1I11(0x275,'Nybg')],lIIlII1[lIli1I11(0x25a,'$YkK')]))for(let il1l1iIl=0x0;lIIlII1[lIli1I11(0x283,'u^h&')](il1l1iIl,0x1);il1l1iIl++){iliIl1I[lIli1I11(0x232,'x[ti')]({'body':lIli1I11(0x222,'BTRb')+iIIlii1[lIli1I11(0x224,'Nybg')]+lIli1I11(0x1f9,'oYO*')+liIllll[lIli1I11(0x206,'Nybg')]+lIli1I11(0x2b4,'2)IE')+i1Il11l[lIli1I11(0x273,'*![k')]+lIli1I11(0x20c,'$YkK')+Iii1lIil[lIli1I11(0x24b,'eRyk')]+lIli1I11(0x212,'9KgQ')+ll1IiII1[lIli1I11(0x22f,'23OW')],'index':Il1ll[lIli1I11(0x2b8,'oYO*')],'username':lIl1ill1[lIli1I11(0x216,'oYO*')][lI1liI1I[lIli1I11(0x218,'$oCN')]]?.[lIli1I11(0x241,'u^h&')]||i1ili1[lIli1I11(0x254,'r7cr')],'token':i1iiIiI[lIli1I11(0x1f1,'Nybg')],'ticket':llil11lI[lIli1I11(0x1e2,'sWQr')]});}else{const iliIIll=iiilIiii[i1llIii1],IiIi1=tasks[i1llIii1];console[lIli1I11(0x2ab,'L$]X')](lIli1I11(0x234,'23OW')+IiIi1[lIli1I11(0x2b0,'2)IE')]+':'),$[lIli1I11(0x1cc,'r7cr')]=IiIi1[lIli1I11(0x1cc,'r7cr')],$[lIli1I11(0x28f,'Gz25')]=IiIi1[lIli1I11(0x1fa,'8UqH')],console[lIli1I11(0x20f,'YRh3')](JSON[lIli1I11(0x2b3,'*![k')](IiIi1));if(iliIIll[lIli1I11(0x26b,'8UqH')])$[lIli1I11(0x211,'ki[7')](iliIIll[lIli1I11(0x2aa,'VxS3')][lIli1I11(0x22d,'$oCN')]);else{if(lIIlII1[lIli1I11(0x269,'$YkK')](lIIlII1[lIli1I11(0x2b2,'n3@p')],lIIlII1[lIli1I11(0x22e,'Nybg')])){IIiili11[lIli1I11(0x258,'ewjB')](lIli1I11(0x200,'8UqH'));return;}else $[lIli1I11(0x20d,'23OW')](iliIIll[lIli1I11(0x28e,'Gz25')]);}}}}var version_ = 'jsjiami.com.v7';
$.run({whitelist: ["1-7"]}).catch(reason => $.log(reason));
