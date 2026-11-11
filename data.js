/*
  The Docket: data for every matter.
  Statuses were checked against news/court sources on Nov 11, 2026 (see each case's sources).
  "reached" = index of the step the matter is at (or ended on). "ended" = true when it stopped there.
  "stakes" (1-5) is an editorial rating of the consequence if proven (5 = removal from office or prison).
  Items about ICE, deportations, the Iran war, and boat strikes name agencies or officials in many cases.
  Each card says who is named. Only items that name Trump personally are framed as accusations against him.
*/
window.TRUMP_DATA = {
  asOf: "Nov 11, 2026",

  tracks: {
    impeach: {
      name: "Impeachment",
      steps: ["House inquiry", "Articles adopted", "House vote", "Senate trial", "Senate vote (2/3 to convict)"]
    },
    federal: {
      name: "Federal criminal",
      steps: ["Investigation", "Grand jury indictment", "Arraignment", "Pretrial motions", "Trial", "Verdict & sentencing", "Appeal", "Clemency (pardon)"]
    },
    state: {
      name: "State criminal",
      steps: ["Investigation", "Grand jury indictment", "Arraignment", "Pretrial motions / removal", "Trial", "Verdict & sentencing", "Appeal"]
    },
    civil: {
      name: "Civil",
      steps: ["Complaint filed", "Discovery", "Summary judgment", "Trial", "Judgment", "Appeal", "Collection"]
    },
    ballot: {
      name: "Ballot challenge",
      steps: ["Petition filed", "State trial court", "State supreme court", "U.S. Supreme Court"]
    },
    challenge: {
      name: "Legal challenge",
      steps: ["Order issued", "Lawsuit filed", "Court blocks it", "Appeal", "Supreme Court ruling"]
    },
    inquiry: {
      name: "Inquiry or oversight",
      steps: ["Allegation raised", "Review or investigation", "Referral or lawsuit", "Charges or final ruling"]
    }
  },

  cases: [
    /* ---------------- CONSTITUTIONAL ---------------- */
    {
      id: "impeach-1",
      title: "First impeachment (Ukraine call)",
      category: "constitutional",
      date: "2019-12-18",
      dateLabel: "Dec 18, 2019",
      track: "impeach",
      reached: 4,
      ended: true,
      status: "acquitted",
      stakes: 5,
      summary: "The House impeached Trump for pressuring Ukraine’s president to announce investigations into Joe Biden and his son while withholding military aid and a White House meeting, then obstructing Congress’s inquiry.",
      charges: ["Abuse of power", "Obstruction of Congress"],
      current: "Senate acquitted him Feb 5, 2020. Abuse of power failed 52–48 and obstruction failed 53–47. Conviction needed 67 votes.",
      defense: [
        "The July 2019 call was “perfect” and included no quid pro quo.",
        "The impeachment was a partisan process.",
        "A president can’t be impeached for asserting constitutional privileges against Congress."
      ],
      handling: [
        "Done: House adopted articles; Senate trial presided over by the Chief Justice.",
        "A new impeachment would need a House majority, and the current House has tabled several attempts."
      ],
      convictionPath: [
        "House majority adopts articles (simple majority).",
        "Senate trial, with the Chief Justice presiding.",
        "Two-thirds of senators present (67 of 100) must vote to convict.",
        "Conviction removes him from office; the Senate can also bar future office-holding."
      ],
      sources: [
        { label: "Wikipedia: First impeachment of Donald Trump", url: "https://en.wikipedia.org/wiki/First_impeachment_of_Donald_Trump" }
      ]
    },

    {
      id: "impeach-2",
      title: "Second impeachment (Jan. 6 incitement)",
      category: "constitutional",
      date: "2021-01-13",
      dateLabel: "Jan 13, 2021",
      track: "impeach",
      reached: 4,
      ended: true,
      status: "acquitted",
      stakes: 5,
      summary: "The House impeached Trump for incitement of insurrection over his speech before the January 6, 2021 attack on the U.S. Capitol.",
      charges: ["Incitement of insurrection"],
      current: "House vote 232–197 (Jan 13, 2021). Senate acquitted him Feb 13, 2021 with 57 guilty and 43 not guilty, 10 votes short of two-thirds.",
      defense: [
        "The speech was protected political speech and did not incite violence.",
        "Impeaching a president after he leaves office is unconstitutional (the Senate rejected this argument)."
      ],
      handling: [
        "Done: House and Senate proceedings are complete.",
        "No new impeachment on this conduct is active."
      ],
      convictionPath: [
        "House majority adopts articles (done).",
        "Senate trial (done).",
        "Two-thirds (67 votes) needed; the 2021 vote fell 10 short.",
        "A future conviction would require a new House vote and a two-thirds Senate vote."
      ],
      sources: [
        { label: "Wikipedia: Second impeachment of Donald Trump", url: "https://en.wikipedia.org/wiki/Second_impeachment_of_Donald_Trump" }
      ]
    },

    {
      id: "section-3",
      title: "14th Amendment ballot disqualification",
      category: "constitutional",
      date: "2023-12-19",
      dateLabel: "Dec 19, 2023",
      track: "ballot",
      reached: 3,
      ended: true,
      status: "dismissed",
      stakes: 5,
      summary: "Voters argued that Trump, having engaged in insurrection after taking the oath, is barred by Section 3 of the 14th Amendment from holding office again.",
      charges: ["Engaging in insurrection or rebellion (14th Amendment, Section 3)"],
      current: "Colorado’s Supreme Court removed him from the ballot (Dec 19, 2023). The U.S. Supreme Court unanimously reversed on Mar 4, 2024 (Trump v. Anderson), ruling that states cannot enforce Section 3 against federal candidates.",
      defense: [
        "The Jan. 6 speech was not incitement.",
        "Section 3 does not apply to the presidency.",
        "Enforcement belongs to Congress, not individual states."
      ],
      handling: [
        "Ballot challenges go through state courts and then the U.S. Supreme Court.",
        "Congress could pass enforcement legislation; it has not."
      ],
      convictionPath: [
        "A court must find he “engaged in insurrection” (the Colorado court did).",
        "Federal courts must allow enforcement; the Supreme Court said states may not do it alone.",
        "Realistic path: Congress passes enforcement legislation, which has not happened."
      ],
      sources: [
        { label: "Wikipedia: Trump v. Anderson", url: "https://en.wikipedia.org/wiki/Trump_v._Anderson" }
      ]
    },

    /* ---------------- EMOLUMENTS (itemized) ---------------- */
    {
      id: "emo-qatar-jet",
      title: "Emoluments: Qatari 747 jet (about $400M)",
      category: "constitutional",
      date: "2025-05-13",
      dateLabel: "May 2025",
      track: "inquiry",
      reached: 1,
      ended: false,
      status: "open",
      stakes: 4,
      summary: "Qatar’s government offered a Boeing 747-8 that Trump accepted for use as Air Force One. The Foreign Emoluments Clause bars federal officials from accepting gifts from foreign states without congressional consent.",
      charges: [
        "Accepting a gift (emolument) from a foreign state without congressional consent (Art. I, §9, cl. 8)"
      ],
      current: "A 2025 Pentagon memo of understanding calls the jet an “unconditional donation” to the Defense Department, with ownership to pass to Trump’s presidential library after his term. Refurbishment was estimated at $400M–$1B. On July 21, 2026, Senate Republicans blocked Sen. Blumenthal’s request to pass S. Res. 807, which would have authorized a Senate lawsuit to enforce the clause. No court case over the jet has been reported.",
      defense: [
        "Trump said the plane would go to the Defense Department, not to him, and then to his library.",
        "The memo says the gift is not connected to any government decision.",
        "Officials describe the plane as being for official government use."
      ],
      handling: [
        "Congressional resolutions (blocked in the Senate).",
        "A Freedom of Press Foundation FOIA suit over a DOJ memo that reportedly found the gift lawful; DOJ says release is not expected until Jan 25, 2027.",
        "Democrats introduced the Protecting Our Democracy Act (May 14, 2026) to write the emoluments bans into law."
      ],
      convictionPath: [
        "Standing: a plaintiff must show a concrete injury (the Senate could sue as an institution, which requires a Senate vote).",
        "The gift must be proven to be an emolument from a foreign state.",
        "Remedy: court order to stop accepting gifts, or an impeachment article (a 2026 House resolution includes an emoluments article)."
      ],
      sources: [
        { label: "S. Res. 807 (text, July 21, 2026)", url: "https://www.govinfo.gov/content/pkg/BILLS-119sres807is/xhtml/BILLS-119sres807is.html" },
        { label: "Blumenthal press release (July 21, 2026)", url: "https://www.blumenthal.senate.gov/newsroom/press/release/senate-republicans-block-blumenthal-anti-corruption-resolution-that-would-force-trump-to-stop-accepting-foreign-payments-and-gifts" }
      ]
    },

    {
      id: "emo-uae-crypto",
      title: "Emoluments: UAE crypto deals (World Liberty)",
      category: "constitutional",
      date: "2025-01-17",
      dateLabel: "Jan 2025",
      track: "inquiry",
      reached: 2,
      ended: false,
      status: "open",
      stakes: 4,
      summary: "A shareholder lawsuit alleges that a UAE-linked entity bought 49% of Trump’s World Liberty Financial for $500M shortly before the inauguration, and that an Abu Dhabi state fund then bought $2B of its USD1 stablecoin. The complaint calls both illegal foreign emoluments.",
      charges: [
        "Foreign emoluments from the UAE (Art. I, §9, cl. 8), as alleged in the complaint"
      ],
      current: "Greenberg v. Trump (D.D.C., Case 1:26-cv-03686) was filed Oct 22, 2026, by a Circle Internet Group shareholder, naming Trump, World Liberty, envoy Steve Witkoff, and four LLCs. It is pending. The White House called it “yet another frivolous lawsuit.” These are allegations in a complaint, not findings.",
      defense: [
        "The White House says there are no conflicts of interest.",
        "World Liberty’s counsel calls the suit a partisan press release.",
        "The deals were commercial and not tied to any government decision."
      ],
      handling: [
        "Pending in federal court in Washington, D.C.",
        "The complaint asks the court to declare the profits unconstitutional and order them returned."
      ],
      convictionPath: [
        "The shareholder must show standing, and the case must survive motions to dismiss.",
        "Prove the payments were from a foreign state (the UAE or an Abu Dhabi state fund).",
        "Remedy would be a court order returning profits; a conviction is not part of a civil case."
      ],
      sources: [
        { label: "Qz: Trump sued over UAE crypto deals (Oct 2026)", url: "https://qz.com/trump-world-liberty-lawsuit-uae-emoluments-crypto-102226" },
        { label: "Complaint (via CNBC, Oct 22, 2026)", url: "https://fm.cnbc.com/applications/cnbc.com/resources/editorialfiles/2026/10/22/Emoluments_Lawsuit_102226.pdf" }
      ]
    },

    {
      id: "emo-china",
      title: "Emoluments: Chinese trademarks and state-linked payments",
      category: "constitutional",
      date: "2018-04-01",
      dateLabel: "2017–2020",
      track: "inquiry",
      reached: 0,
      ended: true,
      status: "no-action",
      stakes: 3,
      summary: "During his first term, China approved 46 trademarks for Trump’s company. CREW’s tally also counts about $5.6M in payments from China-linked entities, including rent from a state-owned bank at Trump Tower and stays by Chinese government delegations at Trump hotels.",
      charges: [
        "Foreign emoluments through trademark approvals and payments from Chinese state-linked entities (Art. I, §9, cl. 8)"
      ],
      current: "Allegation raised by CREW and reported in a House Oversight review; no lawsuit or charge has been filed on these payments in the sources reviewed.",
      defense: [
        "Trump has said his business assets were placed in a trust managed by his sons (2017).",
        "No specific response was found in the sources reviewed."
      ],
      handling: [
        "Watchdog reporting (CREW) and congressional oversight, with no active legal action reported."
      ],
      convictionPath: [
        "Requires a plaintiff with standing and a court that agrees the approvals were foreign emoluments.",
        "No suit is pending, and first-term civil cases were dismissed as moot in 2021 (see the hotel-lawsuit card)."
      ],
      sources: [
        { label: "CREW: $13.6M in foreign-government payments", url: "https://www.citizensforethics.org/reports-investigations/crew-reports/trump-likely-benefited-from-13-6-million-in-payments-from-foreign-governments-during-his-presidency/" }
      ]
    },

    {
      id: "emo-gulf-deals",
      title: "Emoluments: Gulf and Asia development deals",
      category: "constitutional",
      date: "2025-03-01",
      dateLabel: "2025–2026",
      track: "inquiry",
      reached: 0,
      ended: true,
      status: "no-action",
      stakes: 3,
      summary: "Since Trump returned to office, the Trump Organization has announced 13 foreign developments in 9 countries, including Saudi Arabia, Qatar, Oman, the UAE, and Vietnam. Some partners are state-linked, and some projects depend on foreign-government approvals or land.",
      charges: [
        "Foreign emoluments through licensing fees and government-linked partnerships (Art. I, §9, cl. 8)"
      ],
      current: "CREW reports $117M in foreign revenue in the first year of the second term, including $59M in licensing and development fees. In Vietnam, a local government reportedly paid about $2M to relocate residents for a Trump-branded project. No lawsuit or charge has been filed on these deals.",
      defense: [
        "The Trump Organization says it does not do business directly with foreign governments under a self-imposed rule.",
        "Projects are licensing deals in which the partner, not the government, takes on risk."
      ],
      handling: [
        "Reporting by CREW and AP; congressional Democrats have raised concerns."
      ],
      convictionPath: [
        "A plaintiff would need standing and proof that a foreign government was the payer or benefactor.",
        "No case is pending."
      ],
      sources: [
        { label: "CREW: 13 foreign developments since 2024", url: "https://www.citizensforethics.org/reports-investigations/crew-reports/the-trump-organization-has-announced-13-foreign-developments-since-trump-won-back-the-presidency/" },
        { label: "AP: Trump family deal spree", url: "https://apnews.com/article/trump-organization-crypto-conflict-eric-deals-863d8850f536df291391e949ba1bc00e" }
      ]
    },

    {
      id: "emo-hotel-suits",
      title: "Emoluments: first-term hotel lawsuits (domestic & foreign)",
      category: "constitutional",
      date: "2017-06-12",
      dateLabel: "2017–2021",
      track: "challenge",
      reached: 4,
      ended: true,
      status: "dismissed",
      stakes: 3,
      summary: "CREW and the D.C. and Maryland attorneys general sued over payments to Trump’s Washington hotel and other properties from foreign governments and, in the domestic claim, from state and federal sources. Both sides had strong arguments, but no court ever reached the merits.",
      charges: [
        "Foreign emoluments (Art. I, §9, cl. 8)",
        "Domestic emoluments (Art. II, §1, cl. 7)"
      ],
      current: "The Supreme Court vacated the lower-court rulings and dismissed both cases as moot on Jan 25, 2021, after Trump left office. There was never a merits ruling on whether the hotel payments violated the clauses.",
      defense: [
        "The plaintiffs lacked standing to sue.",
        "The lawsuits were “without merit,” in Trump’s words.",
        "His hotels are commercial businesses, not gifts or compensation."
      ],
      handling: [
        "Dismissed as moot; no appellate opinion remains on the merits."
      ],
      convictionPath: [
        "Closed by the Supreme Court. Future suits would start over with new facts and new standing arguments."
      ],
      sources: [
        { label: "Wikipedia: CREW v. Trump", url: "https://en.wikipedia.org/wiki/CREW_v._Trump" },
        { label: "Wikipedia: D.C. and Maryland v. Trump", url: "https://en.wikipedia.org/wiki/D.C._and_Maryland_v._Trump" }
      ]
    },

    /* ---------------- FEDERAL CRIMINAL ---------------- */
    {
      id: "mueller-obstruction",
      title: "Obstruction of justice (Mueller probe)",
      category: "federal",
      date: "2019-04-18",
      dateLabel: "Apr 18, 2019",
      track: "federal",
      reached: 0,
      ended: true,
      status: "not-charged",
      stakes: 4,
      summary: "Special Counsel Robert Mueller’s report described ten episodes examined for possible obstruction, including the firing of FBI Director James Comey and pressure on Attorney General Jeff Sessions. It did not reach a conclusion either way.",
      charges: ["Obstruction of justice (possible; never charged)"],
      current: "No charges. Mueller said that because of DOJ policy against indicting a sitting president, the report could not accuse him, and that it did not exonerate him.",
      defense: [
        "There was no underlying crime (the Russia conspiracy claim was not proven).",
        "Firing officials and speaking publicly were lawful exercises of executive power.",
        "The investigation was a politically motivated “witch hunt.”"
      ],
      handling: [
        "Most of the conduct is more than 5 years old, which is the general federal statute of limitations (18 U.S.C. §3282).",
        "Effectively closed unless tolling or new facts apply."
      ],
      convictionPath: [
        "New evidence or a theory that falls within the statute of limitations.",
        "A grand jury indictment, then a unanimous jury finding guilt beyond a reasonable doubt.",
        "Practically blocked: the older conduct is time-barred."
      ],
      sources: [
        { label: "Mueller report (U.S. DOJ, PDF)", url: "https://www.justice.gov/storage/report.pdf" }
      ]
    },

    {
      id: "classified-docs",
      title: "Classified documents case (Mar-a-Lago)",
      category: "federal",
      date: "2023-06-08",
      dateLabel: "Jun 8, 2023",
      track: "federal",
      reached: 3,
      ended: true,
      status: "dismissed",
      stakes: 5,
      summary: "The indictment alleged Trump kept classified national defense documents at Mar-a-Lago after leaving office, showed some to others, and obstructed efforts to retrieve them.",
      charges: [
        "Willful retention of national defense information (Espionage Act)",
        "Obstruction, including concealing or withholding documents",
        "False statements",
        "Conspiracy (with co-defendants Walt Nauta and Carlos De Oliveira)"
      ],
      current: "Judge Aileen Cannon dismissed the indictment on July 15, 2024, ruling Special Counsel Jack Smith was unlawfully appointed. Smith’s team dropped the remaining appeal after the 2024 election. In Feb 2026 Cannon permanently barred release of Volume II of Smith’s report; the Eleventh Circuit hears the public-access appeal Jan 12, 2027.",
      defense: [
        "The documents were declassified, or Trump had authority to keep them.",
        "The Presidential Records Act governs the records, not criminal law.",
        "The special counsel was unconstitutionally appointed."
      ],
      handling: [
        "Dismissed; no trial took place.",
        "The report on the case (Vol. II) remains sealed while the public-access appeal is pending."
      ],
      convictionPath: [
        "A new indictment (the case was dismissed, not acquitted).",
        "DOJ policy bars indicting a sitting president, so this is realistic only after he leaves office in Jan 2029.",
        "The 5-year statute of limitations for many counts runs out around 2027, so timing is critical.",
        "Conviction would require proof of willful retention beyond a reasonable doubt."
      ],
      sources: [
        { label: "Knight First Amendment Institute: case status", url: "https://knightcolumbia.org/cases/united-states-v-trump-et-al" },
        { label: "Wikipedia: Jack Smith", url: "https://en.wikipedia.org/wiki/Jack_Smith" }
      ]
    },

    {
      id: "jan6-election",
      title: "January 6 and election-overturn case",
      category: "federal",
      date: "2023-08-01",
      dateLabel: "Aug 1, 2023",
      track: "federal",
      reached: 3,
      ended: true,
      status: "dismissed",
      stakes: 5,
      summary: "Special Counsel Jack Smith alleged Trump knowingly spread false fraud claims and pressured officials and Congress to overturn the 2020 election results before the January 6 attack.",
      charges: [
        "Conspiracy to defraud the United States",
        "Conspiracy to obstruct and obstruction of an official proceeding (Congress’s count certification)",
        "Conspiracy against rights"
      ],
      current: "Dismissed in Nov 2024 after the 2024 election under DOJ policy. In Trump v. United States (July 1, 2024), the Supreme Court held that official acts are presumptively immune, which narrowed the case. Smith’s Vol. I report was released in Jan 2025.",
      defense: [
        "Official acts are immune from prosecution under Trump v. United States.",
        "Claims about election fraud were protected political speech.",
        "The prosecution was political."
      ],
      handling: [
        "Case closed; charges were never tried.",
        "Revival would need new charges, and the 5-year statute of limitations on most 2020–21 conduct has largely run."
      ],
      convictionPath: [
        "Prove he knew the fraud claims were false (intent).",
        "Separate official acts (immune) from unofficial conduct (not immune) under the 2024 ruling.",
        "Realistically blocked by the statute of limitations on most conduct.",
        "Verify with a lawyer; limitation rules can be extended in some cases."
      ],
      sources: [
        { label: "Wikipedia: Trump v. United States", url: "https://en.wikipedia.org/wiki/Trump_v._United_States" },
        { label: "Wikipedia: Jack Smith", url: "https://en.wikipedia.org/wiki/Jack_Smith" }
      ]
    },

    {
      id: "campaign-finance",
      title: "Hush money payments: federal campaign finance",
      category: "federal",
      date: "2018-08-21",
      dateLabel: "Aug 2018",
      track: "federal",
      reached: 0,
      ended: true,
      status: "not-charged",
      stakes: 3,
      summary: "In 2018, federal prosecutors said Michael Cohen’s $130,000 payment to Stormy Daniels was made “in coordination with and at the direction of Individual-1” (Trump) to influence the 2016 election. Trump was never federally charged.",
      charges: ["Campaign finance violation (alleged; never charged)"],
      current: "No federal charges were filed. The New York state case later used a falsified-business-records theory tied to these payments.",
      defense: [
        "The payments were personal, not campaign expenses.",
        "Reimbursements to Cohen were legal retainer payments.",
        "Trump said he did not know the details."
      ],
      handling: [
        "DOJ policy barred charges while he was in office.",
        "The 5-year statute of limitations on 2016 conduct has run out."
      ],
      convictionPath: [
        "Practically closed: the statute of limitations has expired.",
        "The only route that proceeded was the state case built on related conduct."
      ],
      sources: [
        { label: "Wikipedia: Michael Cohen", url: "https://en.wikipedia.org/wiki/Michael_Cohen" }
      ]
    },

    {
      id: "alien-enemies",
      title: "Alien Enemies Act deportations & contempt probe",
      category: "immigration",
      date: "2025-03-15",
      dateLabel: "Mar 15, 2025",
      track: "federal",
      reached: 0,
      ended: false,
      status: "open",
      stakes: 5,
      summary: "Planes carrying more than 200 Venezuelans were sent to El Salvador’s CECOT prison in March 2025 under the Alien Enemies Act, despite a judge’s order to turn them around. Judge James Boasberg then opened a criminal contempt inquiry into senior officials.",
      charges: [
        "Criminal contempt of court (alleged, for defying a judge’s order to halt the flights)",
        "Due process violations (alleged by detainees)"
      ],
      current: "Boasberg found probable cause for criminal contempt. A divided panel halted the inquiry twice (the second time on Apr 14, 2026). The full D.C. Circuit vacated that ruling on June 22, 2026, and heard the case en banc on Sept 29, 2026. No decision yet. The proceeding is captioned In re: Donald J. Trump; the inquiry targets officials such as former DHS Secretary Kristi Noem.",
      defense: [
        "Tren de Aragua is a “hybrid criminal state” that justified the invocation of the Act.",
        "The inquiry intrudes on executive decisions about national security and diplomacy (majority of the panel).",
        "The court’s order was not clear enough to support criminal contempt."
      ],
      handling: [
        "En banc decision pending at the D.C. Circuit.",
        "The detainees were released to Venezuela in a prisoner swap (July 2025)."
      ],
      convictionPath: [
        "The en banc court must allow the judge to continue the inquiry.",
        "Fact-finding would identify who authorized the flights.",
        "Criminal contempt requires proof beyond a reasonable doubt that an order was knowingly violated.",
        "A presidential pardon can apply to federal contempt convictions."
      ],
      sources: [
        { label: "AP: Appeals court orders judge to end contempt investigation", url: "https://apnews.com/article/trump-judge-boasberg-contempt-f5ab5110336be20773e8aa8d5b484879" },
        { label: "Law360: full D.C. Circuit to rehear (June 22, 2026)", url: "https://www.law360.com/articles/2492442/full-dc-circ-to-rehear-halt-of-alien-enemies-contempt-probe" }
      ]
    },

    {
      id: "abrego",
      title: "Kilmar Abrego Garcia: deportation and prosecution",
      category: "immigration",
      date: "2025-03-15",
      dateLabel: "Mar 2025",
      track: "federal",
      reached: 6,
      ended: false,
      status: "dismissed",
      stakes: 4,
      summary: "Abrego Garcia was deported to El Salvador’s CECOT prison in March 2025 in error, despite a court order. After the Supreme Court ordered him returned, prosecutors charged him with human smuggling. A judge dismissed that indictment, finding vindictive prosecution.",
      charges: [
        "Conspiracy to transport illegal aliens (8 U.S.C. §1324)",
        "Unlawful transportation of undocumented aliens (8 U.S.C. §1324)"
      ],
      current: "On May 22, 2026, Judge Waverly Crenshaw dismissed the indictment, finding the prosecution was retaliation for his lawsuit. The DOJ appealed to the Sixth Circuit (No. 26-5555). The government’s reply brief is due Nov 20, 2026. The administration has also pushed to deport him to a third country.",
      defense: [
        "The government says the prosecutor acted without direction from the White House, DOJ, or anyone else.",
        "The government says the dismissal was legal error and the charges should be revived."
      ],
      handling: [
        "Appeal pending at the Sixth Circuit.",
        "Deportation fight continues in Maryland; third-country removal has been discussed."
      ],
      convictionPath: [
        "The Sixth Circuit must reverse the dismissal and reinstate the charges.",
        "Then a trial would require unanimous jury proof beyond a reasonable doubt.",
        "The administration’s own conduct (vindictiveness) is the main obstacle the court found."
      ],
      sources: [
        { label: "CourtListener: U.S. v. Abrego Garcia, No. 26-5555", url: "https://www.courtlistener.com/docket/73524247/united-states-v-kilmar-abrego-garcia/" },
        { label: "Reuters: judge dismisses indictment (May 22, 2026)", url: "https://www.reuters.com/world/us-judge-dismisses-indictment-against-salvadoran-migrant-kilmar-abrego-2026-05-22/" }
      ]
    },

    {
      id: "birthright",
      title: "Birthright citizenship executive order",
      category: "immigration",
      date: "2025-01-20",
      dateLabel: "Jan 20, 2025",
      track: "challenge",
      reached: 4,
      ended: true,
      status: "struck",
      stakes: 4,
      summary: "Executive Order 14160 tried to deny citizenship to children born in the U.S. to parents who are unlawfully or temporarily present. Challengers said it violates the 14th Amendment and federal law.",
      charges: [
        "Violation of the Citizenship Clause of the 14th Amendment",
        "Violation of federal citizenship statute (8 U.S.C. §1401)"
      ],
      current: "On June 30, 2026, the Supreme Court ruled 6–3 in Trump v. Barbara that the order is unconstitutional. Children born in the U.S. to unlawfully or temporarily present parents are citizens at birth. Justice Kavanaugh agreed on statutory grounds only; Justices Thomas, Alito, and Gorsuch dissented.",
      defense: [
        "The order reinterprets “subject to the jurisdiction” in the 14th Amendment.",
        "Birthright citizenship should not extend to children of people who entered illegally."
      ],
      handling: [
        "Blocked by courts; the order cannot be enforced.",
        "Congress could change the statute, but has not."
      ],
      convictionPath: [
        "Not a criminal matter. The order is blocked by a final Supreme Court ruling.",
        "Future change would require a new constitutional amendment or new legislation."
      ],
      sources: [
        { label: "SCOTUSblog: Trump v. Barbara", url: "https://www.scotusblog.com/cases/trump-v-barbara/" },
        { label: "Congress.gov CRS: Trump v. Barbara", url: "https://www.congress.gov/crs-product/LSB11468" }
      ]
    },

    {
      id: "guard",
      title: "National Guard deployments to U.S. cities",
      category: "immigration",
      date: "2025-06-07",
      dateLabel: "Jun 2025",
      track: "challenge",
      reached: 3,
      ended: true,
      status: "struck",
      stakes: 3,
      summary: "Trump sent National Guard troops to Los Angeles, Portland, and Chicago, citing protests against ICE raids. Cities and states sued, arguing the deployments were illegal.",
      charges: [
        "Unlawful federalization of the Guard under 10 U.S.C. §12406",
        "Violation of the Posse Comitatus Act (alleged)"
      ],
      current: "On Dec 23, 2025, the Supreme Court (Trump v. Illinois) refused to allow the Chicago deployment, reading “regular forces” to mean the military. A federal judge permanently blocked the Portland deployment on Nov 7, 2025, and the administration dropped its appeal in Feb 2026. The Illinois suit was dismissed as moot in 2026, and the troops have left.",
      defense: [
        "The Guard was needed to protect federal officers and property during protests.",
        "The president has inherent constitutional authority to protect federal personnel."
      ],
      handling: [
        "Blocked by courts; the troops have withdrawn from Chicago, Los Angeles, and Portland."
      ],
      convictionPath: [
        "Not a criminal matter. The deployments are blocked by court orders and are not active.",
        "A future deployment would need new authority the courts found lacking."
      ],
      sources: [
        { label: "Supreme Court: Trump v. Illinois (Dec 23, 2025)", url: "https://www.supremecourt.gov/opinions/25pdf/25a443_new_b07d.pdf" },
        { label: "Stanford Law: Oregon's withdrawal after Trump v. Illinois", url: "https://law.stanford.edu/2026/05/19/redefining-executive-force-after-trump-v-illinois-oregons-withdrawal-and-the-growing-shadow-of-federal-power/" }
      ]
    },

    {
      id: "detention",
      title: "Deaths and conditions in ICE detention",
      category: "immigration",
      date: "2025-01-20",
      dateLabel: "Jan 2025–2026",
      track: "challenge",
      reached: 3,
      ended: false,
      status: "open",
      stakes: 5,
      summary: "Human Rights Watch counts 52 deaths in ICE custody between Jan 20, 2025 and June 4, 2026, the highest mortality rate in over a decade. Lawsuits allege beatings, inadequate medical care, and unsafe conditions at Camp East Montana (El Paso) and Adelanto (California).",
      charges: [
        "Cruel, inhuman, or degrading treatment (alleged, under the Constitution and treaties)",
        "Inadequate medical care and violations of ICE policy (alleged)"
      ],
      current: "The ACLU sued over Camp East Montana (May 2026), which has had three deaths. A federal judge issued a preliminary injunction for Adelanto on July 16, 2026, and the government asked to delay enforcement while it appeals. The defendants are ICE and DHS, not Trump personally. No criminal charges have been brought in these deaths.",
      defense: [
        "Federal officials say conditions at Adelanto already meet court standards and asked the court to delay its order."
      ],
      handling: [
        "Civil suits pending; FOIA suit by American Oversight seeks death records.",
        "Appeal pending in the Adelanto case."
      ],
      convictionPath: [
        "Civil suits can produce injunctions and damages, but not prison.",
        "Criminal accountability would need evidence of intent or negligence beyond a reasonable doubt, which has not been brought.",
        "Federal criminal charges could be pardoned; state criminal charges could not."
      ],
      sources: [
        { label: "HRW: Dying in Detention (June 2026)", url: "https://www.hrw.org/report/2026/06/25/dying-in-detention/rising-deaths-in-an-expanding-us-immigration-detention-system" },
        { label: "ACLU: Akari Angye et al. v. ICE", url: "https://www.aclu.org/cases/akari-angye-et-al-v-ice" }
      ]
    },

    {
      id: "castro",
      title: "Minneapolis ICE shooting (Operation Metro Surge)",
      category: "immigration",
      date: "2026-01-14",
      dateLabel: "Jan 14, 2026",
      track: "state",
      reached: 2,
      ended: false,
      status: "open",
      stakes: 4,
      summary: "During the Minneapolis enforcement surge, ICE agent Christian Castro fired through a door and shot Venezuelan immigrant Julio Sosa-Celis in the leg. Initial official accounts that agents were attacked were contradicted by video.",
      charges: [
        "Second-degree assault with a dangerous weapon (state charge, 4 counts)",
        "Falsely reporting a crime (state charge)",
        "Six counts of making false statements to the FBI (federal charge)"
      ],
      current: "Hennepin County charged Castro on May 18, 2026. He pleaded not guilty to six federal counts of lying to the FBI (Sept 18, 2026) and to the state charges. DOJ is still considering civil-rights charges over the shooting. Charges are allegations, and he is presumed innocent.",
      defense: [
        "Castro says he was attacked with a broom and shovel before he fired.",
        "Officials have said federal agents have immunity when performing their duties."
      ],
      handling: [
        "State case in Hennepin County; federal case in U.S. District Court (St. Paul).",
        "Federal prosecutors are considering civil-rights charges."
      ],
      convictionPath: [
        "State conviction would require proof beyond a reasonable doubt; the case may be removed to federal court but is still prosecuted by the state.",
        "A president cannot pardon a state conviction.",
        "Federal counts could be pardoned by a president."
      ],
      sources: [
        { label: "Minnesota AG press release (Sept 17, 2026)", url: "https://ag.state.mn.us/Office/Communications/2026/09/17_Castro.asp" },
        { label: "Reuters: ICE agent pleads not guilty (Sept 18, 2026)", url: "https://www.reuters.com/legal/government/ice-agent-pleads-not-guilty-lying-about-minneapolis-shooting-2026-09-18/" }
      ]
    },

    /* ---------------- MILITARY / WAR ---------------- */
    {
      id: "boat-strikes",
      title: "Caribbean and Pacific boat strikes",
      category: "military",
      date: "2025-09-02",
      dateLabel: "Sep 2, 2025",
      track: "inquiry",
      reached: 1,
      ended: false,
      status: "open",
      stakes: 5,
      summary: "Since Sept 2, 2025, U.S. forces have struck suspected drug boats in the Caribbean and eastern Pacific. Human Rights Watch counts 227 deaths in 69 strikes. A Sept 2 strike reportedly included a second strike that killed two survivors, which the military confirmed was ordered during the operation.",
      charges: [
        "Extrajudicial killing (alleged; under international human rights law)",
        "Murder or war crimes (alleged by critics; legal experts disagree on whether an armed conflict exists)"
      ],
      current: "The Pentagon inspector general is reviewing whether the targeting process was followed. Venezuela’s National Assembly formed a commission to investigate. Members of Congress have said they will examine the legality of the second strike. No U.S. charges have been filed.",
      defense: [
        "The administration says the strikes are lawful under the law of armed conflict and target drug smugglers.",
        "It describes the campaign as a “non-international armed conflict” with drug traffickers.",
        "It has not released evidence that the people killed posed no threat, according to critics; the White House has disputed some press reports."
      ],
      handling: [
        "Pentagon inspector general evaluation (announced May 2026).",
        "Congressional inquiries; no special committee created yet."
      ],
      convictionPath: [
        "A criminal case would need an investigation by the Justice Department, which has not begun.",
        "Legal experts say the second strike is likely unlawful, but whether it is a war crime depends on whether an armed conflict exists.",
        "Federal charges could be pardoned by a president."
      ],
      sources: [
        { label: "HRW: Year of Extrajudicial Killings at Sea (Sept 2, 2026)", url: "https://www.hrw.org/news/2026/09/02/united-states-year-of-extrajudicial-killings-at-sea" },
        { label: "BBC Verify: legal experts on the second strike", url: "https://www.bbc.com/news/articles/c3v15zkxpe0o" }
      ]
    },

    {
      id: "iran-war",
      title: "Iran war launched without congressional authorization",
      category: "military",
      date: "2026-02-28",
      dateLabel: "Feb 28, 2026",
      track: "inquiry",
      reached: 1,
      ended: false,
      status: "open",
      stakes: 5,
      summary: "On Feb 28, 2026, the U.S. and Israel launched strikes on Iran (“Operation Epic Fury”), including on leadership targets. U.S. and Israeli officials said Supreme Leader Ali Khamenei was killed in the first wave. Critics say Congress never authorized the war under the War Powers Resolution.",
      charges: [
        "Waging war without congressional authorization (alleged; War Powers Resolution)",
        "Violation of constitutional war powers (alleged)"
      ],
      current: "The House passed war-powers resolutions three times, most recently H.Con.Res. 93 (220–204, Sept 15, 2026). The Senate narrowly rejected H.Con.Res. 89 (49–50, Sept 24, 2026). These are concurrent resolutions that Congress’s own analysis says do not bind the president, and no bill has reached his desk.",
      defense: [
        "Trump said the aim was to “eliminate imminent threats from the Iranian regime,” including its nuclear program.",
        "The president has authority as commander in chief to defend the United States."
      ],
      handling: [
        "Congressional war-powers votes (non-binding).",
        "No court case has been decided on the war’s legality."
      ],
      convictionPath: [
        "Courts have generally avoided war-powers cases; this would be decided politically in Congress.",
        "Congress could pass a binding joint resolution, which the president would veto; two-thirds of both chambers would be needed to override.",
        "Not a criminal case unless a specific offense is identified."
      ],
      sources: [
        { label: "House roll call 307 (H.Con.Res. 93)", url: "https://clerk.house.gov/evs/2026/roll307" },
        { label: "Reuters: Senate rejects Iran war-powers resolution (Sept 24, 2026)", url: "https://www.reuters.com/world/us/us-senate-rejects-resolution-curbing-trumps-iran-war-powers-2026-09-24/" }
      ]
    },

    {
      id: "iran-school",
      title: "Minab school strike in Iran",
      category: "military",
      date: "2026-02-28",
      dateLabel: "Feb 28, 2026",
      track: "inquiry",
      reached: 1,
      ended: false,
      status: "open",
      stakes: 5,
      summary: "A U.S. Tomahawk strike on the Shajarah Tayyebeh girls’ school in Minab killed about 165–170 people, many of them children. A preliminary U.S. military investigation found the strike resulted from outdated targeting data that failed to separate the school from an adjacent Iranian base.",
      charges: [
        "War crimes (alleged; disproportionate or indiscriminate attack on civilians)",
        "Failure to verify targeting data (alleged)"
      ],
      current: "The Pentagon’s preliminary inquiry found U.S. responsibility, according to reporting from March 2026. As of the latest AP reporting, the administration had not formally accepted blame or released final findings. No charges have been filed.",
      defense: [
        "The strike targeted an adjacent IRGC naval base; the preliminary finding describes a targeting error.",
        "The administration has not publicly accepted responsibility."
      ],
      handling: [
        "Pentagon investigation; senators have demanded answers.",
        "Final findings not released publicly as of the latest reporting."
      ],
      convictionPath: [
        "Military accountability could lead to discipline if the investigation finds negligence.",
        "A war-crimes case would need proof of recklessness or knowledge, and no charge has been filed.",
        "Federal charges could be pardoned by a president."
      ],
      sources: [
        { label: "NYT: U.S. at fault in Iran school strike (Mar 11, 2026)", url: "https://www.nytimes.com/2026/03/11/us/politics/iran-school-missile-strike.html" },
        { label: "AP: Trump administration silent on Iranian school strike", url: "https://apnews.com/article/iran-school-strike-baluch-trump-2a134a5c74d80db763db4c3eb6d0d847" }
      ]
    },

    /* ---------------- STATE CRIMINAL ---------------- */
    {
      id: "ny-hush",
      title: "New York hush money (Stormy Daniels) case",
      category: "state",
      date: "2023-04-04",
      dateLabel: "Apr 4, 2023",
      track: "state",
      reached: 6,
      ended: false,
      status: "convicted",
      stakes: 4,
      summary: "A Manhattan jury found Trump guilty of 34 felony counts of falsifying business records to conceal reimbursements to Michael Cohen for the $130,000 payment to Stormy Daniels before the 2016 election. He is the first U.S. president convicted of a crime.",
      charges: [
        "34 counts of Falsifying Business Records in the First Degree (N.Y. Penal Law §175.10, Class E felony)",
        "The base misdemeanor was elevated to a felony by an alleged intent to conceal another crime"
      ],
      current: "Sentenced Jan 10, 2025 to an unconditional discharge (no jail, no fine). The First Department Appellate Division heard arguments Nov 5, 2026, with no ruling yet. A federal judge denied removal to federal court again on Aug 28, 2026; that denial is headed to the Second Circuit. Next steps: New York’s Court of Appeals, then possibly the U.S. Supreme Court.",
      defense: [
        "The prosecution was politically motivated.",
        "Presidential immunity (Trump v. United States) bars using evidence of official acts.",
        "Federal election law preempts the state theory.",
        "Errors in evidence admission at trial."
      ],
      handling: [
        "Pending: Appellate Division decision.",
        "Removal to federal court (denied three times).",
        "Then the New York Court of Appeals, and possibly the U.S. Supreme Court."
      ],
      convictionPath: [
        "The conviction stands unless an appellate court reverses it.",
        "Reversal would require a legal error serious enough to undo the verdict.",
        "A presidential pardon does not reach state crimes, so only New York courts can overturn this conviction."
      ],
      sources: [
        { label: "POLITICO: NY judges split on upholding conviction (Nov 5, 2026)", url: "https://www.politico.com/news/2026/11/05/new-york-trump-hush-money-conviction-appeal" },
        { label: "Reuters: removal bid denied (Aug 28, 2026)", url: "https://www.reuters.com/world/us/trump-loses-bid-move-already-decided-criminal-hush-money-case-us-court-2026-08-28/" }
      ]
    },

    {
      id: "georgia",
      title: "Georgia election racketeering case",
      category: "state",
      date: "2023-08-14",
      dateLabel: "Aug 14, 2023",
      track: "state",
      reached: 3,
      ended: true,
      status: "dismissed",
      stakes: 5,
      summary: "A Fulton County indictment alleged Trump and 18 others conspired to overturn Georgia’s 2020 result, including the January 2, 2021 call to Secretary of State Brad Raffensperger.",
      charges: [
        "Racketeering (Georgia RICO)",
        "Solicitation of violation of oath by a public officer",
        "Filing false documents and false statements (41 counts in total across defendants)"
      ],
      current: "Dismissed on Nov 26, 2025. Fani Willis was disqualified, and the replacement prosecutor, Pete Skandalakis, said there was “no realistic prospect” of trying a sitting president. Judge Scott McAfee dismissed the case in its entirety.",
      defense: [
        "The actions were lawful efforts to examine the election.",
        "Prosecutorial misconduct (Willis was disqualified).",
        "Actions taken in an official capacity."
      ],
      handling: [
        "Dismissed; not refiled as of Nov 2026.",
        "The dismissal was described as without prejudice, so refiling is legally possible but unlikely."
      ],
      convictionPath: [
        "Closed: no realistic path to trial in Georgia.",
        "Only a new Georgia prosecutor could refile, which the replacement prosecutor said is not viable."
      ],
      sources: [
        { label: "AP: Georgia election case dismissed", url: "https://apnews.com/article/georgia-trump-election-indictment-fani-willis-b9000b28e65fc8ebe57f6f9cca5cc3ef" },
        { label: "ABC News: prosecutor drops case", url: "https://abcnews.com/US/georgia-prosecutor-drops-election-interference-case-trump/story?id=127898245" }
      ]
    },

    {
      id: "fake-electors",
      title: "Fake-elector schemes (other states)",
      category: "state",
      date: "2023-07-18",
      dateLabel: "Jul 2023",
      track: "state",
      reached: 1,
      ended: true,
      status: "not-charged",
      stakes: 4,
      summary: "Slates of alternate “electors” in swing states signed certificates claiming Trump won. Trump is named as an unindicted co-conspirator in Michigan, but he has not been charged in those state cases.",
      charges: ["Forgery and conspiracy charges against electors (Trump not charged)"],
      current: "Electors were charged in Michigan (2023) and in other states such as Nevada, Wisconsin, and Arizona. Outcomes vary by state; verify each docket.",
      defense: [
        "The electors were a contingency plan to preserve options pending litigation.",
        "Trump says he was advised by lawyers."
      ],
      handling: [
        "State attorneys general and district attorneys decide charges.",
        "Trump has not been charged in these states."
      ],
      convictionPath: [
        "Evidence that Trump directed or knew of the scheme (intent).",
        "State statutes of limitation (often 3–5 years) are a major obstacle for 2020 conduct.",
        "A presidential pardon does not apply to state charges."
      ],
      sources: [
        { label: "Wikipedia search: fake electors and Trump", url: "https://en.wikipedia.org/w/index.php?search=Trump+fake+electors+Michigan+unindicted+co-conspirator" }
      ]
    },

    /* ---------------- CIVIL ---------------- */
    {
      id: "carroll",
      title: "E. Jean Carroll sexual abuse & defamation",
      category: "civil",
      date: "2019-06-21",
      dateLabel: "Jun 2019",
      track: "civil",
      reached: 5,
      ended: false,
      status: "liable",
      stakes: 3,
      summary: "Writer E. Jean Carroll accused Trump of sexually assaulting her in a Manhattan department store dressing room in the mid-1990s. Juries found him liable for sexual abuse and defamation (first case) and for defamation (second case).",
      charges: [
        "Sexual abuse (civil liability; first case)",
        "Defamation (statements denying her account; both cases)"
      ],
      current: "The $5M verdict (May 2023) is final; the Supreme Court denied review on June 29, 2026. The $83.3M defamation judgment (Feb 2024) was upheld by the Second Circuit on Sept 8, 2025; Trump’s petition to the Supreme Court (No. 26-141) is pending.",
      defense: [
        "The allegations are false.",
        "Presidential immunity (argued in the Supreme Court petition).",
        "His statements were official acts covered by the federal Westfall Act."
      ],
      handling: [
        "Appeals, then a Supreme Court petition.",
        "Civil judgments are enforced through payment."
      ],
      convictionPath: [
        "Liability already found by juries (civil standard: “more likely than not”).",
        "Remaining: whether the Supreme Court takes up the $83.3M judgment.",
        "Civil liability means money damages, not prison."
      ],
      sources: [
        { label: "SCOTUS docket: Trump v. Carroll (No. 26-141)", url: "https://www.supremecourt.gov/docket/docketfiles/html/public/26-141.html" },
        { label: "The Guardian: Carroll fights the $83m appeal (Nov 2, 2026)", url: "https://www.theguardian.com/us-news/2026/nov/02/e-jean-carroll-trump-supreme-court" }
      ]
    },

    {
      id: "ny-civil-fraud",
      title: "New York civil fraud case (AG Letitia James)",
      category: "civil",
      date: "2022-09-21",
      dateLabel: "Sep 2022",
      track: "civil",
      reached: 5,
      ended: false,
      status: "liable",
      stakes: 4,
      summary: "The New York Attorney General alleged Trump and the Trump Organization inflated property values on financial statements to get better loan and insurance terms. Judge Arthur Engoron found fraud liability in Sept 2023.",
      charges: [
        "Persistent fraud or illegality (N.Y. Executive Law §63(12))",
        "Falsifying business records and insurance fraud (civil)"
      ],
      current: "Fraud liability was upheld on Aug 21, 2025, but the roughly $464M disgorgement penalty was vacated as excessive. Trump asked the NY Court of Appeals to reverse liability (April 2026); the Attorney General’s appeal to restore the penalty is also pending. Some non-monetary restrictions (officer/director bans, loan limits) have been stayed or are pending.",
      defense: [
        "No victims: the banks and insurers were sophisticated and profited.",
        "Property valuations were subjective opinions.",
        "The Attorney General lacked authority to bring this case."
      ],
      handling: [
        "Appeal pending at the New York Court of Appeals.",
        "If liability is upheld, the court decides which penalties remain."
      ],
      convictionPath: [
        "The Court of Appeals decides whether the liability finding stands.",
        "If upheld, the remaining penalties and restrictions are sorted out.",
        "Civil case: a presidential pardon does not apply."
      ],
      sources: [
        { label: "CourtDocket: Trump's appeal wins and pending challenges", url: "https://courtdocket.org/trump-wins-appeal-civil-fraud-carroll-and-criminal-cases/" },
        { label: "POLITICO: Trump asks NY court to toss remnants (Apr 2026)", url: "https://www.politico.com/news/2026/04/08/donald-trump-civil-fraud-appeal-00864123" }
      ]
    },

    {
      id: "trump-university",
      title: "Trump University fraud claims",
      category: "civil",
      date: "2013-11-18",
      dateLabel: "Nov 2013",
      track: "civil",
      reached: 4,
      ended: true,
      status: "settled",
      stakes: 2,
      summary: "Former students alleged Trump University sold expensive real-estate seminars under false promises. Trump was deposed in the consumer-fraud lawsuits.",
      charges: ["Consumer fraud (New York Attorney General and class actions)"],
      current: "Settled in Nov 2016 for $25M in the class actions, with no admission of wrongdoing.",
      defense: [
        "Trump University was a legitimate education business.",
        "Students were satisfied with the seminars.",
        "The presiding judge was biased against him."
      ],
      handling: [
        "Settled; the payment was made and the cases closed."
      ],
      convictionPath: [
        "Closed by settlement; no trial or judgment."
      ],
      sources: [
        { label: "Wikipedia: Trump University", url: "https://en.wikipedia.org/wiki/Trump_University" }
      ]
    },

    {
      id: "trump-foundation",
      title: "Trump Foundation misuse of charity funds",
      category: "civil",
      date: "2019-06-14",
      dateLabel: "Jun 2019",
      track: "civil",
      reached: 4,
      ended: true,
      status: "settled",
      stakes: 2,
      summary: "The New York Attorney General alleged the Trump Foundation was used for business and political benefit, including buying a portrait of Trump and settling legal claims with charity money.",
      charges: [
        "Self-dealing with charitable assets",
        "Improper political activity by a charity"
      ],
      current: "The foundation was dissolved, and Trump agreed to pay about $2M to charities under a 2018 settlement with the NY AG. The AG’s 2019 suit continued after that; verify the final resolution of any remaining claims.",
      defense: [
        "The foundation was used for legitimate charitable giving.",
        "Expenses were approved by the foundation’s board."
      ],
      handling: [
        "Foundation dissolved; the payment to charities was made."
      ],
      convictionPath: [
        "Mostly resolved by settlement and dissolution.",
        "Any remaining claims would be civil, not criminal."
      ],
      sources: [
        { label: "Wikipedia: Donald J. Trump Foundation", url: "https://en.wikipedia.org/wiki/Donald_J._Trump_Foundation" }
      ]
    }
  ],

  pathways: [
    {
      id: "impeach",
      name: "Impeachment",
      who: "House majority starts it; Senate decides",
      color: "#f59e0b",
      steps: ["House inquiry", "Articles adopted by simple majority", "Senate trial", "Two-thirds vote to convict", "Removal from office"],
      standard: "Political judgment on “high crimes and misdemeanors.” No criminal proof standard.",
      endPower: "A pardon cannot stop impeachment.",
      status: "Two impeachments (2019, 2021) ended in acquittal. Several 2026 resolutions have been tabled or referred to committee."
    },
    {
      id: "federal",
      name: "Federal criminal",
      who: "DOJ or special counsel; grand jury; federal jury",
      color: "#ef4444",
      steps: ["Investigation", "Grand jury indictment", "Pretrial motions", "Unanimous jury trial", "Sentencing", "Appeal"],
      standard: "Beyond a reasonable doubt; unanimous jury.",
      endPower: "The president can pardon federal crimes, but DOJ policy bars indicting a sitting president, which is why federal cases stalled until he leaves office (Jan 2029).",
      status: "Classified docs and Jan 6 cases were dismissed. Federal charges against an ICE agent (Minneapolis) are pending."
    },
    {
      id: "state",
      name: "State criminal",
      who: "District attorney or state AG; grand jury; state jury",
      color: "#a855f7",
      steps: ["Investigation", "Grand jury indictment", "Arraignment", "Removal fight", "Trial", "Sentencing", "State appeals"],
      standard: "Beyond a reasonable doubt; unanimous jury.",
      endPower: "A presidential pardon does not reach state crimes. Only state courts can overturn them.",
      status: "New York conviction is on appeal. Georgia case was dismissed in Nov 2025. Minnesota has charged an ICE agent."
    },
    {
      id: "civil",
      name: "Civil",
      who: "Private plaintiffs or a state AG; civil court",
      color: "#06b6d4",
      steps: ["Complaint", "Discovery", "Summary judgment", "Trial", "Judgment", "Appeals", "Collection"],
      standard: "Preponderance of the evidence (“more likely than not”).",
      endPower: "Civil judgments carry money damages, injunctions, or business restrictions. No prison. A pardon does not apply.",
      status: "Liability found in Carroll and NY fraud cases; both are on appeal. Detention and emoluments suits are pending."
    },
    {
      id: "ballot",
      name: "Ballot challenge (14th Amendment §3)",
      who: "Voters or states; state courts, then the Supreme Court",
      color: "#38bdf8",
      steps: ["Petition", "State trial court", "State supreme court", "U.S. Supreme Court"],
      standard: "Courts decide whether he “engaged in insurrection.”",
      endPower: "The Supreme Court held that states cannot enforce Section 3 against federal candidates; Congress would have to act.",
      status: "Disqualification rejected 9–0 (Mar 2024)."
    },
    {
      id: "war",
      name: "War powers and military conduct",
      who: "Congress (votes, oversight); Pentagon inspector general; DOJ for criminal charges",
      color: "#84cc16",
      steps: ["Allegation", "Congressional or Pentagon review", "Referral to DOJ", "Charges", "Court"],
      standard: "Criminal charges need proof beyond a reasonable doubt. War-powers disputes are political, and courts have usually declined to rule.",
      endPower: "A president can pardon federal military-crime charges. He cannot pardon foreign prosecutions or state crimes.",
      status: "Iran war votes were non-binding. Boat strikes and the Minab school strike are under review. No charges have been filed."
    }
  ]
};
