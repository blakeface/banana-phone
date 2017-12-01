import React, { Component } from 'react';

export default class FAQ extends Component {
	handleClick(){
		const warranty = document.querySelector('#warranty');
		const view = document.querySelector('.view');
		const hide = document.querySelector('.hide');
		if (warranty.className == 'is-hidden') {
			warranty.classList.remove('is-hidden');
			hide.classList.remove('is-hidden');
			view.classList.add('is-hidden');
		} else {
			warranty.classList.add('is-hidden');
			hide.classList.add('is-hidden');
			view.classList.remove('is-hidden');
		}
	}

	render(){
		return (
			<section className="faq">
				<h2>FAQ</h2>

				<p><strong>Q1: Where is the Banana Phone Charger? I didn’t see it in the box?</strong></p>
				<p>A1: Have no fear!  The Banana Phone Micro USB charging cord is located inside the white paper tray cube base.  Photo below.  It can be connected to any wall outlet base or computer for charging.</p>

				<p><strong>Q2: Why can’t I activate Siri on my iPhone through Banana Phone?</strong></p>
				<p className="no-padding">A2: Easy Fix! Please ensure 3 Siri settings are activated on your iPhone by following the steps below:</p>
				<ul>
					<li className="no-padding">Step 1: Open Settings</li>
					<li className="no-padding">Step 2: Select Siri and Search</li>
					<li className="no-padding">Step 3: Toggle On:</li>
					<li className="no-padding faqli"><i>Listen for “Hey Siri”</i></li>
					<li className="no-padding faqli"><i>Press Home for Siri</i></li>
					<li className="no-padding faqli"><i>Allow Siri When Locked</i></li>
				</ul>

				<p><strong>Q3: On Android, I’m having trouble knowing when to say the name of the person I’m dialing.  What’s the trick?</strong></p>
				<p>A3: No worries.  We recommend waiting for the beep from your Android before you say the name of the person you wish to dial.  It’s best to practice a couple times with your Android device in front of you. Ensure that “OK Google” has been activated on your smart phone.</p>

				<a href="#warranty" onClick={this.handleClick.bind(this)}><strong>
					<span className="view">View</span>
					<span className="hide is-hidden">Hide</span>
					&nbsp;warranty
				</strong></a>

				<div id="warranty" className="is-hidden">
					<h2>LIMITED WARRANTY ON Banana Phone</h2>
					<p>THIS LIMITED WARRANTY GIVES YOU SPECIFIC LEGAL RIGHTS AND YOU MAY ALSO HAVE OTHER RIGHTS, WHICH VARY FROM STATE TO STATE.</p>
					<p>WE WARRANT THAT DURING THE WARRANTY PERIOD, THE PRODUCT WILL BE FREE FROM DEFECTS IN MATERIALS AND WORKMANSHIP.</p>
					<p>WE LIMIT THE DURATION AND REMEDIES OF ALL IMPLIED WARRANTIES, INCLUDING WITHOUT LIMITATION THE WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE TO THE DURATION OF THIS EXPRESS LIMITED WARRANTY.</p>
					<p>SOME STATES DO NOT ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY LASTS, SO THE ABOVE LIMITATION MAY NOT APPLY TO YOU.</p>
					<p>OUR RESPONSIBILITY FOR DEFECTIVE GOODS IS LIMITED TO REPAIR, REPLACEMENT, OR REFUND AS DESCRIBED BELOW IN THIS WARRANTY STATEMENT.</p>

					<h3>WHO MAY USE THIS WARRANTY?</h3>
					<p>Banana Phone LLC. located at address 9 Swallow Ln, Orchard Park, NY 14127 ("we") extend this limited warranty only to the consumer who originally purchased the product ("you"). It does not extend to any subsequent owner or other transferee of the product.</p>

					<h3>WHAT DOES THIS WARRANTY COVER?</h3>
					<p>This limited warranty covers defects in materials and workmanship of the Banana Phone (the "product") for the Warranty Period as defined below.</p>

					<h3>WHAT DOES THIS WARRANTY NOT COVER?</h3>
					<p>This limited warranty does not cover any damage due to: (a) transportation; (b) storage; (c) improper use; (d) failure to follow the product instructions; (e) modifications; (f) unauthorized repair; (g) normal wear and tear; (h) purchase from unauthorized seller; (i) unauthorized reselling; or (j) external causes such as accidents, abuse, or other actions or events beyond our reasonable control.</p>

					<h3>WHAT IS THE PERIOD OF COVERAGE?</h3>
					<p>This limited warranty starts on the date of your purchase and lasts for one year (the "Warranty Period"). The Warranty Period is not extended if we repair or replace the product. We may change the availability of this limited warranty at our discretion, but any changes will not be retroactive.</p>

					<h3>WHAT ARE YOUR REMEDIES UNDER THIS WARRANTY?</h3>
					<p>With respect to any defective product during the Warranty Period, we will, in our sole discretion, either: (a) repair or replace such product (or the defective part) free of charge, or (b) refund the purchase price of such product. We will also pay for shipping and handling fees to return the repaired or replacement product to you if we elect to repair or replace the defective product.</p>

					<h3>HOW DO YOU OBTAIN WARRANTY SERVICE?</h3>
					<p>To obtain warranty service, email our Customer Service Department at yellow@bananaphone.io during the Warranty Period to obtain a Defective Merchandise Authorization ("DMA") number. No warranty service will be provided without a DMA number. To obtain a DMA, you must submit a copy of your receipt proving you are the original purchaser of your product. After we have provided you with a DMA, we will provide you instructions on how to return your product for examination of eligibility by our warranty department. Once your product is received, our warranty department will examine the product to make the determination of whether the product is covered by this limited warranty. Should your product not qualify under this warranty, you shall bear the costs of shipping and delivery of the product back to your possession.</p>

					<h3>LIMITATION OF LIABILITY</h3>
					<p>THE REMEDIES DESCRIBED ABOVE ARE YOUR SOLE AND EXCLUSIVE REMEDIES AND OUR ENTIRE LIABILITY FOR ANY BREACH OF THIS LIMITED WARRANTY. OUR LIABILITY SHALL UNDER NO CIRCUMSTANCES EXCEED THE ACTUAL AMOUNT PAID BY YOU FOR THE DEFECTIVE PRODUCT, NOR SHALL WE UNDER ANY CIRCUMSTANCES BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES OR LOSSES, WHETHER DIRECT OR INDIRECT.</p>
					<p>SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.</p>

					<a href="#warranty" onClick={this.handleClick.bind(this)}><strong>
						Hide warranty
					</strong></a>
				</div>

			</section>
		)
	}
}