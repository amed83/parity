var job = {
	headline: 'Javascript wizard with good sense of design',
	essentials: {
		locations: ['berlin', 'london'],
		employment: EmploymentType().Permanent,
		startdate: new Date().getTime(),
		salary: {
			status: TaxStatus().Gross,
			interval: Interval().Year,
			currency: 'GBP',
			amount: 35000,
			stockoptions: true
		},
		industry: 'Blockchain',
		companysize: CompanySize().TenToTwenty,
		teamsize: { min: 1, max: 5 }
	},
	methodology: {
		codereviews: true,
		prototyping: true,
		pairprogramming: true,
		failfast: true,
		unittests: true,
		integrationtests: true,
		buildserver: BuildServers().Travis,
		staticcodeanalysis: CodeAnalysisTools().NotYetChosen,
		versioncontrol: VersionControlSystem().Git,
		issuetracker: IssueTrackers().GitHub,
		knowledgerepo: KnowledgeRepos().GitHubWiki,
		standups: true,
		qaprotocol: true,
		agilemanagement: AgileManagementSystems().Kanban,
		freedomovertools: true,
		onecommandbuild: true,
		quickstart: true,
		commitondayone: true
	},
	specs: {
		workload: 1.0,
		workweek: 40,
		holidays: 20,
		corehours: { from: 1100, to: 1700 },
		travel: TravelOptions().Plentiful,
		remote: RemoteWorking().Negotiable,
		relocationpackage: RelocationPackages().Negotiable
	},
	profile: {
		newfeatures: 70,
		clientsupport: 20,
		documentation: 10,
		maintenance: 0,
		meetings: 0
	},
	equipment: {
		operatingsystem: [OperationSystems().MacOSX, OperationSystems().Ubuntu],
		computer: MachineType().Laptop,
		monitors: Monitors().Negotiable
	},
	technologies: {
		css3: Level().Expert,
		html5: Level().Expert,
		javascript: Level().Expert,
		node: Level().Expert,
		rest: Level().Good,
		jsonrpc: Level().Good,
		uiux: Level().Good,
		design: Level().Good,
		oneof: {
			junit: Level().Good,
			mocha: Level().Good,
			jasmine: Level().Good,
			selenium: Level().Good
		},
		oneof1: {
			react: Level().Familiar,
			meteor: Level().Familiar,
			angular: Level().Familiar
		},
		p2p: Level().Familiar,
		ethereum: Level().Familiar,
		blockchain: Level().Familiar,
		oneof2: {
			rust: Level().Familiar,
			haskell: Level().Familiar,
			ruby: Level().Familiar,
			python: Level().Familiar,
			cpp: Level().Familiar
		},
		gametheory: Level().Familiar,
		cryptography: Level().Familiar,
		boardgames: Level().Familiar
	},
	other: [
		'we do retreats',
		'we change the world',
		'best team around',
		'hardcore'
	],
	misc: {
		training: TrainingType().Informal,
		fossphilosophy: FOSS().AlwaysOpen,
		codingretreats: true,
		conferences: [
			ConferencePotential().Speaking,
			ConferencePotential().Attending
		],
		teamevents: true,
		healthcare: true,
		mobilephone: false,
		kitchen: true,
		canteen: false,
		freestuff: ['coffee', 'beverages', 'snacks', 'bikeparking', 'playroom']
	}
};

function buildPage(obj) {
	let titleContainer = document.createElement('div');
	titleContainer.classList.add('title-container');
	let title = document.createTextNode(job.headline);
	titleContainer.appendChild(title);
	document.body.appendChild(titleContainer);
	let bodyContainer = document.createElement('div');
	let requirements = document.getElementById('requirements');
	let companySpecs = document.getElementById('companyspecs');

	bodyContainer.appendChild(requirements);
	bodyContainer.appendChild(companySpecs);
	bodyContainer.classList.add('body-container');

	let readableDate = job.essentials.startdate;
	let expContainer = document.createElement('div');
	let goodContainer = document.createElement('div');
	let familiarContainer = document.createElement('div');
	expContainer.classList.add('expert-container');
	goodContainer.classList.add('good-container');
	familiarContainer.classList.add('familiar-container');

	var date = new Date().getTime();
	var newdate = new Date(date);

	var newdate =
		newdate.getDay() +
		'/' +
		newdate.getMonth() +
		'/' +
		newdate.getFullYear();

	function checkObj(obj) {
		for (let props in obj) {
			if (Array.isArray(obj[props])) {
				let newText, text;
				newText = document.createElement('p');

				if (
					props === 'locations' ||
					props === 'freestuff' ||
					props === 'other'
				) {
					text = document.createTextNode('');
				} else if (props === 'conferences') {
					text = document.createTextNode('Conferences');
				} else {
					text = document.createTextNode(props);
				}
				newText.appendChild(text);
				newText.classList.add(props);

				obj[props].forEach(el => {
					var newNode = document.createElement('p');
					var nodeText = document.createTextNode(
						el.charAt(0).toUpperCase() + el.slice(1)
					);
					newNode.appendChild(nodeText);
					newText.appendChild(newNode);
					bodyContainer.appendChild(newText);
					document.body.appendChild(bodyContainer);
				});
			} else if (typeof obj[props] === 'object') {
				var newSection = document.createElement('h2');
				if (
					props === 'oneof' ||
					props === 'oneof1' ||
					props === 'oneof2'
				) {
					var text = document.createTextNode('One of');
				} else {
					var text = document.createTextNode(
						props.charAt(0).toUpperCase() + props.slice(1)
					);
				}

				newSection.appendChild(text);
				var sectionsContainer = document.createElement('div');

				sectionsContainer.classList.add(props);
				sectionsContainer.appendChild(newSection);

				for (let props2 in obj[props]) {
					var insideObj = obj[props][props2];
					if (typeof insideObj !== 'object') {
						let newContent = document.createElement('p');
						let contentText = document.createTextNode(insideObj);
						let title = document.createTextNode(
							props2.charAt(0).toUpperCase() +
								props2.slice(1) +
								': '
						);
						switch (props2) {
							case 'startdate':
								contentText = document.createTextNode(newdate);
								newContent.appendChild(contentText);
								console.log(props2, newContent);
								break;
							case 'companysize':
								let size = '1-10';
								contentText = document.createTextNode(size);
								break;
							default:
						}

						switch (insideObj) {
							case true:
								contentText = document.createTextNode('');
								newContent.appendChild(contentText);
								newContent.classList.add('isTrue');
								break;
							case false:
								contentText = document.createTextNode('\u2718');
								newContent.appendChild(contentText);
								break;
							case 'Expert':
							case 'Good':
							case 'Familiar':
								newContent.classList.add(insideObj);
								break;
							default:
								newContent.appendChild(contentText);
						}

						newContent.appendChild(title);
						newContent.appendChild(contentText);
						newContent.classList.add(props2);
						sectionsContainer.appendChild(newContent);
						bodyContainer.appendChild(sectionsContainer);
						document.body.appendChild(bodyContainer);

						//Build requirements section

						function createRequirementList(container) {
							let skillToAdd = document.createElement('p');
							skillToAdd.classList.add(props2);
							let skill = document.createTextNode(
								props2.charAt(0).toUpperCase() +
									props2.slice(1) +
									','
							);

							skillToAdd.appendChild(skill);
							container.appendChild(skillToAdd);
							requirements.appendChild(container);
						}

						if (newContent.classList.contains('Expert')) {
							createRequirementList(expContainer);
						} else if (newContent.classList.contains('Good')) {
							createRequirementList(goodContainer);
						} else if (newContent.classList.contains('Familiar')) {
							createRequirementList(familiarContainer);
						}
					}
				}

				checkObj(obj[props]); //iterate through nested objects
			}
		}
	}
	checkObj(obj);
}

buildPage(job);

function EmploymentType() {
	return enumerate('Permanent', 'Temporary', 'Project');
}
function TaxStatus() {
	return enumerate('Gross', 'Net');
}
function Interval() {
	return enumerate('Week', 'Month', 'Year');
}
function CompanySize() {
	return enumerate(
		'LessThanTen',
		'TenToTwenty',
		'TwentyToFifty',
		'FiftyToTwoHundred',
		'MoreThanTwoHundred'
	);
}
function VersionControlSystem() {
	return enumerate('NotYetChosen', 'Git');
}
function IssueTrackers() {
	return enumerate('NotYetChosen', 'GitHub');
}
function BuildServers() {
	return enumerate('NotYetChosen', 'Jenkins', 'Travis');
}
function CodeAnalysisTools() {
	return enumerate('NotYetChosen');
}
function KnowledgeRepos() {
	return enumerate('NotYetChosen', 'GitHubWiki');
}
function AgileManagementSystems() {
	return enumerate('NotYetChosen', 'Kanban');
}
function TravelOptions() {
	return enumerate('None', 'Possible', 'Plentiful');
}
function RemoteWorking() {
	return enumerate('No', 'Negotiable', 'Required');
}
function RelocationPackages() {
	return enumerate('Nonealse', 'Negotiable');
}
function OperationSystems() {
	return enumerate('MacOSX', 'Ubuntu', 'Windows');
}
function MachineType() {
	return enumerate('Workstation', 'Laptop');
}
function Monitors() {
	return enumerate('Negotiable');
}
function Level() {
	return enumerate('Familiar', 'Good', 'Expert');
}
function TrainingType() {
	return enumerate('None', 'Informal', 'Formal', 'External');
}
function ConferencePotential() {
	return enumerate('Attending', 'Speaking');
}
function FOSS() {
	return enumerate('Closed', 'SometimesOpen', 'AlwaysOpen');
}
function enumerate() {
	v = arguments;
	s = { all: [], keys: v };
	for (i = v.length; i--; ) s[v[i]] = s.all[i] = v[i];
	return s;
}
