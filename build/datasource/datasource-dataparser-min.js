YUI.add("datasource-dataparser",function(D){var C=D.Lang,B=D.DataSource,A=function(){};A.ATTRS={parser:{value:null,validator:function(E){return((E instanceof D.DataParser.Base)||(E===null));}}};A.prototype={_handleData:function(F,G){var E=(this.get("parser")&&this.get("parser").parse(G.data));if(!E){E={meta:{},results:G.data};}this.fire("response",null,D.mix(G,E));}};D.Base.build(B,[A],{dynamic:false});},"@VERSION@",{requires:["datasource","dataparser"]});