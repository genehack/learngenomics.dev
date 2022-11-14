"use strict";(self.webpackChunklearngenomics_dev=self.webpackChunklearngenomics_dev||[]).push([[584],{3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},f=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),m=c(n),p=i,u=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(u,o(o({ref:t},f),{},{components:n})):r.createElement(u,o({ref:t},f))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7293:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={},s="BAM Files",c={unversionedId:"genomic-file-formats/BAM-files",id:"genomic-file-formats/BAM-files",title:"BAM Files",description:"The\xa0Sequence Alignment/Map\xa0(or SAM) format is the most common output file format after the read alignment. Typically, these files will be encoded in a binary format, bgzipped, indexed, at which point the file is referred to as a\xa0Binary Alignment/Map Format\xa0or BAM file. Each BAM file contains a header (typically used for storing metadata) followed by millions of reads, stored as one read per line. Each read contains all of the information available in the FASTQ file (read name, sequence, associated quality score), as well as additional information added by the aligner, including where the read maps to the reference genome, whether the read was produced by PCR or optical duplication, and the quality of the alignment assigned by the mapping software.",source:"@site/docs/04-genomic-file-formats/03-BAM-files.md",sourceDirName:"04-genomic-file-formats",slug:"/genomic-file-formats/BAM-files",permalink:"/docs/genomic-file-formats/BAM-files",draft:!1,editUrl:"https://github.com/stjude/learngenomics.dev/tree/main/docs/04-genomic-file-formats/03-BAM-files.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FASTQ Files",permalink:"/docs/genomic-file-formats/FASTQ-files"},next:{title:"VCF Files",permalink:"/docs/genomic-file-formats/VCF-files"}},f={},d=[],m={toc:d};function p(e){var t=e.components,l=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bam-files"},"BAM Files"),(0,a.kt)("p",null,"The\xa0",(0,a.kt)("strong",{parentName:"p"},"Sequence Alignment/Map"),"\xa0(or SAM) format is the most common output file format after the read alignment. Typically, these files will be encoded in a binary format, bgzipped, indexed, at which point the file is referred to as a\xa0Binary Alignment/Map Format\xa0or BAM file. Each BAM file contains a header (typically used for storing metadata) followed by millions of reads, stored as one read per line. Each read contains all of the information available in the FASTQ file (read name, sequence, associated quality score), as well as additional information added by the aligner, including where the read maps to the reference genome, whether the read was produced by PCR or optical duplication, and the quality of the alignment assigned by the mapping software."),(0,a.kt)("p",null,"Ultimately, a SAM file is a tab-delimited text file that could be piped into standard Unix tools for processing. BAM files can be treated in much the same way if passed through\xa0samtools view\xa0first. Learn more about it in the associated ",(0,a.kt)("a",{parentName:"p",href:"https://samtools.github.io/hts-specs/SAMv1.pdf"},"documentation"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(395).Z,width:"1000",height:"959"})))}p.isMDXComponent=!0},395:function(e,t,n){t.Z=n.p+"assets/images/6.2-BAM-2dd71d8e7b3ee35633667bf0ff8e9cd4.jpg"}}]);