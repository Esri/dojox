﻿define(
({
	/* These are already handled in the default RTE
		amp:"ampersand\",lt:\"चिह्न से कम",
		gt:"से ज्यादा चिह्न",
		nbsp:"कोई अवरोध अंतराल नहीं\nअवरोध अंतराल नहीं",
		quot:"कथन-चिह्न",
	*/
	iexcl:"उल्टे विस्मयादिबोधक चिह्न",
	cent:"सेंट का चिह्न",
	pound:"पाउंड का चिह्न",
	curren:"मुद्रा का चिह्न",
	yen:"येन का चिह्न\nयुआन का चिह्न",
	brvbar:"अवरुद्ध बार\nअवरुद्ध लंब बार",
	sect:"खंड चिह्न",
	uml:"डायरेसिस\nअंतराल डायरेसिस",
	copy:"कॉपीराइट चिह्न",
	ordf:"स्त्रीवाचक क्रमवार सूचक",
	laquo:"बाईं तरफ को दोहरे कोण वाला कथन चिह्न\nबाईं तरफ को गुल्लीमेट",
	not:"ना का चिह्न",
	shy:"सॉफ्ट हाइफन\nडिस्क्रेशनरी हाइफन",
	reg:"पंजीकृत चिह्न\nपंजीकृत ट्रेड मार्क चिह्न",
	macr:"मैक्रॉन\nअंतराल मैक्रॉन\nओवरलाइन\nAPL ओवरबार",
	deg:"डिग्री चिह्न",
	plusmn:"जोड-घटाव चिह्न\nजोड-या-घटाव चिह्न",
	sup2:"सुपरस्क्रिप्ट दो\nसुपरस्क्रिप्ट अंक दो\nवर्गाकार",
	sup3:"सुपरस्क्रिप्ट तीन\nसुपरस्क्रिप्ट अंक तीन\nघनाकार",
	acute:"अक्यूट दबाव\nअंतराल अक्यूट",
	micro:"माइक्रो चिह्न",
	para:"पिलक्रो चिह्न\nपरिच्छेद चिह्न",
	middot:"मध्य बिंदु\nजार्जियन अल्पविराम\nयूनानी मध्य बिंदु",
	cedil:"सेडिल्ला\nअंतराल सेडिल्ला",
	sup1:"सुपरस्क्रिप्ट एक\nसुपरस्क्रिप्ट अंक एक",
	ordm:"पुरुषवाचक क्रमवार सूचक",
	raquo:"दार्इं तरफ को दोहरे कोण वाला कथन चिह्न\nदाईं तरफ को गुल्लीमेट",
	frac14:"अपशब्द खंड एक चौथार्इ\nखंड एक चौथार्इ",
	frac12:"अपशब्द खंड आधा\nखंड आधा",
	frac34:"अपशब्द खंड तीन चौथार्इ\nखंड तीन चौथार्इ",
	iquest:"अनुबद्ध प्रश्न चिह्न\nमुड़ा हुआ प्रश्न चिह्न",
	Agrave:"ग्रेव सहित लैटिन बड़ा अक्षर A \nलैटिन बड़ा अक्षर A अतीव",
	Aacute:"अक्यूट सहित लैटिन बड़ा अक्षर A",
	Acirc:"सर्कमफ्लेक्स सहित लैटिन बड़ा अक्षर A",
	Atilde:"टिल्डे सहित लैटिन बड़ा अक्षर A",
	Auml:"डाइरेसिस सहित लैटिन बड़ा अक्षर A",
	Aring:"उपर रिंग सहित लैटिन बड़ा अक्षर A\nलैटिन बड़ा अक्षर A रिंग",
	AElig:"लैटिन बड़ा अक्षर AE\nलैटिन बड़ा लिगेचर AE",
	Ccedil:"सेडिल्ला सहित लैटिन बड़ा अक्षर C",
	Egrave:"ग्रेव सहित लैटिन बड़ा अक्षर E",
	Eacute:"अक्यूट सहित लैटिन बड़ा अक्षर E",
	Ecirc:"सर्कमफ्लेक्स सहित लैटिन बड़ा अक्षर E",
	Euml:"डाइरेसिस सहित लैटिन बड़ा अक्षर E",
	Igrave:"ग्रेव सहित लैटिन बड़ा अक्षर I",
	Iacute:"अक्यूट सहित लैटिन बड़ा अक्षर I",
	Icirc:"सर्कमफ्लेक्स सहित लैटिन बड़ा अक्षर I",
	Iuml:"डाइरेसिस सहित लैटिन बड़ा अक्षर I",
	ETH:"लैटिन बड़ा अक्षर ETH",
	Ntilde:"टिल्डे सहित लैटिन बड़ा अक्षर N",
	Ograve:"ग्रेव सहित लैटिन बड़ा अक्षर O",
	Oacute:"अक्यूट सहित लैटिन बड़ा अक्षर O",
	Ocirc:"सर्कमफ्लेक्स सहित लैटिन बड़ा अक्षर O",
	Otilde:"टिल्डे सहित लैटिन बड़ा अक्षर O",
	Ouml:"डाइरेसिस सहित लैटिन बड़ा अक्षर O",
	times:"गुणा का चिह्न",
	Oslash:"स्ट्रोक सहित लैटिन बड़ा अक्षर O\nलैटिन बड़ा अक्षर O स्लैश",
	Ugrave:"ग्रेव सहित लैटिन बड़ा अक्षर U",
	Uacute:"अक्यूट सहित लैटिन बड़ा अक्षर U",
	Ucirc:"सर्कमफ्लेक्स सहित लैटिन बड़ा अक्षर U",
	Uuml:"डाइरेसिस सहित लैटिन बड़ा अक्षर U",
	Yacute:"अक्यूट सहित लैटिन बड़ा अक्षर Y",
	THORN:"लैटिन बड़ा अक्षर THORN",
	szlig:"लैटिन छोटा अक्षर शार्प s\ness-zed",
	agrave:"ग्रेव सहित लैटिन छोटा अक्षर a\nलैटिन छोटा अक्षर a ग्रेव",
	aacute:"अक्यूट सहित लैटिन छोटा अक्षर a",
	acirc:"सर्कमफ्लेक्स सहित लैटिन छोटा अक्षर a",
	atilde:"टिल्डे सहित लैटिन छोटा अक्षर a",
	auml:"डाइरेसिस सहित लैटिन छोटा अक्षर a",
	aring:"उपर रिंग सहित लैटिन छोटा अक्षर a\nलैटिन छोटा अक्षर a रिंग",
	aelig:"लैटिन छोटा अक्षर ae\nलैटिन छोटा लिगेचर ae",
	ccedil:"सेडिल्ला सहित लैटिन छोटा अक्षर c",
	egrave:"ग्रेव सहित लैटिन छोटा अक्षर e",
	eacute:"अक्यूट सहित लैटिन छोटा अक्षर e",
	ecirc:"सर्कमफ्लेक्स सहित लैटिन छोटा अक्षर e",
	euml:"डाइरेसिस सहित लैटिन छोटा अक्षर e",
	igrave:"ग्रेव सहित लैटिन छोटा अक्षर i",
	iacute:"अक्यूट सहित लैटिन छोटा अक्षर i",
	icirc:"सर्कमफ्लेक्स सहित लैटिन छोटा अक्षर i",
	iuml:"डाइरेसिस सहित लैटिन छोटा अक्षर i",
	eth:"लैटिन छोटा अक्षर eth",
	ntilde:"टिल्डे सहित लैटिन छोटा अक्षर n",
	ograve:"ग्रेव सहित लैटिन छोटा अक्षर o",
	oacute:"अक्यूट सहित लैटिन छोटा अक्षर o",
	ocirc:"सर्कमफ्लेक्स सहित लैटिन छोटा अक्षर o",
	otilde:"टिल्डे सहित लैटिन छोटा अक्षर o",
	ouml:"डाइरेसिस सहित लैटिन छोटा अक्षर o",
	divide:"विभाजन चिह्न",
	oslash:"स्ट्रोक सहित लैटिन छोटा अक्षर o\nलैटिन छोटा अक्षर o स्लैश",
	ugrave:"ग्रेव सहित लैटिन छोटा अक्षर u",
	uacute:"अक्यूट सहित लैटिन छोटा अक्षर u",
	ucirc:"सर्कमफ्लेक्स सहित लैटिन छोटा अक्षर u",
	uuml:"डाइरेसिस सहित लैटिन छोटा अक्षर u",
	yacute:"अक्यूट सहित लैटिन छोटा अक्षर y",
	thorn:"लैटिन छोटा अक्षर thorn",
	yuml:"डाइरेसिस सहित लैटिन छोटा अक्षर y",

// Greek Characters and Symbols
	fnof:"हुक सहित लैटिन छोटा f\nफंक्शन\nफ्लोरिन",
	Alpha:"यूनानी बड़ा अक्षर अल्फा",
	Beta:"यूनानी बड़ा अक्षर बीटा",
	Gamma:"यूनानी बड़ा अक्षर गामा",
	Delta:"यूनानी बड़ा अक्षर डेल्टा",
	Epsilon:"यूनानी बड़ा अक्षर एप्सिलॉन",
	Zeta:"यूनानी बड़ा अक्षर ज़ेटा",
	Eta:"यूनानी बड़ा अक्षर एटा",
	Theta:"यूनानी बड़ा अक्षर थेटा",
	Iota:"यूनानी बड़ा अक्षर आयोटा",
	Kappa:"यूनानी बड़ा अक्षर कप्पा",
	Lambda:"यूनानी बड़ा अक्षर लम्बडा",
	Mu:"यूनानी बड़ा अक्षर mu",
	Nu:"यूनानी बड़ा अक्षर nu",
	Xi:"यूनानी बड़ा अक्षर xi",
	Omicron:"यूनानी बड़ा अक्षर ओमिक्रॉन",
	Pi:"यूनानी बड़ा अक्षर pi",
	Rho:"यूनानी बड़ा अक्षर rho",
	Sigma:"यूनानी बड़ा अक्षर सिग्मा",
	Tau:"यूनानी बड़ा अक्षर tau",
	Upsilon:"यूनानी बड़ा अक्षर अप्सिलॉन",
	Phi:"यूनानी बड़ा अक्षर phi",
	Chi:"यूनानी बड़ा अक्षर chi",
	Psi:"यूनानी बड़ा अक्षर psi",
	Omega:"यूनानी बड़ा अक्षर ओमेगा",
	alpha:"यूनानी छोटा अक्षर अल्फा",
	beta:"यूनानी छोटा अक्षर बीटा",
	gamma:"यूनानी छोटा अक्षर गामा",
	delta:"यूनानी छोटा अक्षर डेल्टा",
	epsilon:"यूनानी छोटा अक्षर एप्सिलॉन",
	zeta:"यूनानी छोटा अक्षर ज़ेटा",
	eta:"यूनानी छोटा अक्षर एटा",
	theta:"यूनानी छोटा अक्षर थेटा",
	iota:"यूनानी छोटा अक्षर आयोटा",
	kappa:"यूनानी छोटा अक्षर कप्पा",
	lambda:"यूनानी छोटा अक्षर लांबडा",
	mu:"यूनानी छोटा अक्षर mu",
	nu:"यूनानी छोटा अक्षर nu",
	xi:"यूनानी छोटा अक्षर xi",
	omicron:"यूनानी छोटा अक्षर ओमिक्रॉन",
	pi:"यूनानी छोटा अक्षर pi",
	rho:"यूनानी छोटा अक्षर rho",
	sigmaf:"यूनानी छोटा अक्षर अंतिम सिग्मा",
	sigma:"यूनानी छोटा अक्षर सिग्मा",
	tau:"यूनानी छोटा अक्षर tau",
	upsilon:"यूनानी छोटा अक्षर अप्सिलॉन",
	phi:"यूनानी छोटा अक्षर phi",
	chi:"यूनानी छोटा अक्षर chi",
	psi:"यूनानी छोटा अक्षर psi",
	omega:"यूनानी छोटा अक्षर ओमेगा",
	thetasym:"यूनानी छोटा अक्षर थेटा संकेत",
	upsih:"हुक संकेत सहित यूनानी अप्सिलॉन",
	piv:"यूनानी pi संकेत",
	bull:"बुलेट\nकाला छोटा वृत्त",
	hellip:"क्षैतिज बड़ा वृत्त\nतीन बिंदुओं का चिह्न",
	prime:"प्राइम\nमिनट्स\nफीट",
	Prime:"दोहरा प्राइम\nसेकेंड्स\nइंच",
	oline:"ओवरलाइन\nअंतराल ओवरस्कोर",
	frasl:"खंड स्लैश",
	weierp:"स्क्रिप्ट बड़ा P\nपॉवर सेट\nवेइयरस्ट्रास p",
	image:"काला-अक्षर बड़ा I\nइमेजिनरी भाग",
	real:"काला-अक्षर बड़ा R\nवास्तविक भाग संकेत",
	trade:"ट्रेड मार्क संकेत",
	alefsym:"अलेफ संकेत\nपहला ट्रान्सफिनाइट गुणन",
	larr:"बाईं ओर तीर",
	uarr:"ऊपर की ओर तीर",
	rarr:"दाईं ओर तीर",
	darr:"नीचे की ओर तीर",
	harr:"बाईं दाईं ओर तीर",
	crarr:"बाईं ओर कोने सहित नीचे की ओर तीर\nवाहन वापसी",
	lArr:"बाईं ओर दोहरा तीर",
	uArr:"ऊपर की ओर दोहरा तीर",
	rArr:"दाईं ओर दोहरा तीर",
	dArr:"नीचे की ओर दोहरा तीर",
	hArr:"बाईं दाईं ओर दोहरा तीर",
	forall:"सभी के लिए",
	part:"आंशिक विभेदक",
	exist:"वहां मौजूद है",
	empty:"खाली सेट\nशून्य सेट\nव्यास",
	nabla:"नाबला\nपृष्ठगामी अंतर",
	isin:"का घटक",
	notin:"का कोई घटक नहीं",
	ni:"सदस्य के रूप में शामिल",
	prod:"n-ary उत्पाद\nउत्पाद चिह्न",
	sum:"n-ary योगकरण",
	minus:"घटाव चिह्न",
	lowast:"एस्टेरिक प्रचालक",
	radic:"वर्ग आधार\nमूलभेत चिह्न",
	prop:"को अनुपातक",
	infin:"निरंतरता",
	ang:"कोण",
	and:"तार्किक एवं\nपच्चर",
	or:"तार्किक या\nvee",
	cap:"काट\nआवरण",
	cup:"युग्मन\nकप\",\"int\":\"अविभाज्य",
	there4:"अतः",
	sim:"टिल्डे प्रचालक\nसे भिन्न\nके बराबर",
	cong:"लगभग इसके बराबर",
	asymp:"लगभग इसके बराबर\nके चिह्नरहित",
	ne:"के बराबर नहीं",
	equiv:"के समान",
	le:"से कम या समान",
	ge:"से अधिक या समान",
	sub:"का सबसेट",
	sup:"का सुपरसेट",
	nsub:"का सबसेट नहीं",
	sube:"का सबसेट या उसके समान",
	supe:"का सुपरसेट या उसके समान",
	oplus:"वृत्तयुक्त प्लस\nप्रत्यक्ष योग",
	otimes:"वृत्तयुक्त अवधियां\nसदिश उत्पाद",
	perp:"अप टैक\nको लंबकोणीय\nलंबवत्",
	sdot:"बिंदु प्रचालक",
	lceil:"बाई सीलिंग\nAPL अपस्टाइल",
	rceil:"दाईं सीलिंग",
	lfloor:"बायां फ्लोर\nAPL डाउनस्टाइल",
	rfloor:"दायां फ्लोर",
	lang:"बाई दिशा में कोण ब्रेकेट",
	rang:"दाईं दिशा में कोण ब्रेकेट",
	loz:"समचतुर्भुज",
	spades:"काला पान चिह्न",
	clubs:"काली चिड़िया चिह्न\nशैमरॉक",
	hearts:"काले दिल का चिह्न\nवैलेंटाइन",
	diams:"काले हीरे का चिह्न",
	OElig:"लैटिन बड़ा लिगेचर OE",
	oelig:"लैटिन छोटा लिगेचर oe",
	Scaron:"कैरन सहित लैटिन बड़ा अक्षर S",
	scaron:"कैरन सहित लैटिन छोटा अक्षर s",
	Yuml:"डाइरेसिस सहित लैटिन बड़ा अक्षर Y",
	circ:"संशोधक अक्षर सर्कमफ्लेक्स दबाव",
	tilde:"छोटा टिल्डे",
	ensp:"en अंतराल",
	emsp:"em अंतराल",
	thinsp:"पतला अंतराल",
	zwnj:"जोड़कहीन शून्य चौड़ाई",
	zwj:"शून्य चौड़ाई जोड़क",
	lrm:"बाएं से दाएं चिह्न",
	rlm:"दाएं से बाएं चिह्न",
	ndash:"en डैश",
	mdash:"em डैश",
	lsquo:"बायां एकल कथन चिह्न",
	rsquo:"दायां एकल कथन चिह्न",
	sbquo:"एकल निम्न-9 कथन चिह्न",
	ldquo:"बायां दोहरा कथन चिह्न",
	rdquo:"दायां दोहरा कथन चिह्न",
	bdquo:"दोहरा निम्न-9 कथन चिह्न",
	dagger:"कटार",
	Dagger:"दोहरी कटार",
	permil:"प्रति मील चिह्न",
	lsaquo:"एकल बाईं-दिशा को कोण कथन चिह्न",
	rsaquo:"एकल दाईं-दिशा को कोण कथन चिह्न",
	euro:"यूरो का चिह्न"
})
);
