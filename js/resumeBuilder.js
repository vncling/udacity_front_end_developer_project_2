var appendObjectProperties = function(object, location, formatter, propertyPlaceholder, valuePlaceholder) {
  for (var property in object) {
    var value = object[property];
    var data = formatter.replace(propertyPlaceholder, property)
                        .replace(valuePlaceholder, value);
    $(location).append(data);
  }
};

var appendListOfObjects = function(list, location, formatter, valuePlaceholder) {
  for (var key in list) {
    $(location).append(formatter.replace(valuePlaceholder, list[key]));
  }
};

var replaceData = function(data, formatter, dataPlaceholder) {
  dataPlaceholder = dataPlaceholder || '%data%';
  return formatter.replace(dataPlaceholder, data);
};

var bio = {
  'name': 'Vincent Ling (MBA)',
  'role': 'IT Director & System Developer',
  'contacts': {
    'mobile': "<a href='tel:4074019696'>407-401-9696</a>",
    'email': "<a href='mailto:vincent.ling@aitseinc.com'>vincent.ling@aitseinc.com</a>",
    'linkedin': "<a href='https://www.linkedin.com/pub/vincent-ling/25/816/9aa'>Vincent Ling(MBA)</a>",
    'github': "<a href='https://github.com/vncling'>vncling</a>",
    'location': "<a href='#'>Orlando, FL</a>"
  },
  'welcomeMessage': 'Senior IT Manager with a MBA and 14 years of international business and technology management experience. Expert in developing and implementing IT solutions to support successful start-ups, turnarounds, and high-growth companies. Trusted advisor to executive leaders, providing valued input for strategic business planning and program/product development.',
  'skills': [  'Information Technology Management', 'Cutting Edge Product Delivery', 'C-Level Communications / Presentations',
              'Budget Forecasting & Administration', 'Enterprise Resource Planning (ERP)', 'Consensus Building / Change Mgmt.',
			  'Technical Project Management', 'Financial Reporting / Data Analytics', 'Contract Negotiations & Administration',
			  'Systems / Software Integration & SDLC','Cloud Infrastructure Engineering', 'End-User Training & Tech Support',
			  'Network Design, Mgmt. & Security', 'Amazon Web Services (AWS)', 'Global IT Staff Supervision & Training',
			  'Ecommerce / Web Site Administration', 'Virtualization & Automation','Employee Engagement & Effectiveness',
			  'Regulatory Compliance (HIPAA & PCI)', 'Continuous Process Improvements', 'Problem Identification & Resolution',
			  'Leading Cross-Functional Teams', 'QA Standards / Performance Metrics', 'Vendor Sourcing & Relationship Mgmt.'],
  'biopic': 'images/self.png',
  'display': function() {
    var name = replaceData(bio.name, HTMLheaderName);
    var role = replaceData(bio.role, HTMLheaderRole).replace('<hr/>','');

    $('#header').prepend(role)
                .prepend(name);

    appendObjectProperties(bio.contacts, '#topContacts', HTMLcontactGeneric, '%contact%', '%data%');
    $('#topContacts').children().clone().appendTo('#footerContacts');

    $('#header').append(replaceData(bio.biopic, HTMLbioPic))
                .append(replaceData(bio.welcomeMessage, HTMLWelcomeMsg))
                .append(HTMLskillsStart);

    appendListOfObjects(bio.skills, '#skills', HTMLskills, '%data%');
  }
};

var education = {
  'schools': [
    {'name': 'Brandeis University',
     'location': 'Waltham, MA',
     'degree': 'Master of Business Administration',
     'majors': ['International Business'],
     'dates': 2011,
     'url': 'http://www.brandeis.edu/'
    },
	{'name': 'National Sun Yat-Sen University',
     'location': 'Kaohsung, Taiwan',
     'degree': 'Bachelor of Science',
     'majors': ['Marine Science'],
     'dates': 2001,
     'url': 'http://www.nsysu.edu.tw/bin/home.php'
    }
  ],
  'onlineCourses': [
    {'title': 'Front-End Nanodegree',
     'school': 'Udacity',
     'date': 2015,
     'url': 'http://www.udacity.com'
    },  
	{'title': 'Certified Big Data & Hadoop Developer',
     'school': 'SimpliLearn',
     'date': 2015,
     'url': 'http://www.simplilearn.com'
    },
	{'title': 'MITx: 6.00.1x Introduction to Computer Science and Programming Using Python',
     'school': 'edXMIT',
     'date': 2015,
     'url': 'https://courses.edx.org/courses/course-v1:MITx+6.00.1x_6+2T2015/info'
    }
  ],
  'display': function() {
    for (var i in this.schools) {
      $('#education').append(replaceData(i, HTMLschoolStart));
      var id = '#school-entry-' + i;
      var school = this.schools[i];
      $(id).append((replaceData(school.name, HTMLschoolName) + replaceData(school.degree, HTMLschoolDegree))
           .replace('#', school.url))
           .append(replaceData(school.dates, HTMLschoolDates))
           .append(replaceData(school.location, HTMLschoolLocation))
           .append(replaceData(school.majors, HTMLschoolMajor));
    }
	
    $('#education').append(HTMLonlineClasses);
    for (var j in this.onlineCourses) {
      $('#education').append(replaceData(j, HTMLonlineStart));
      var id = '#online-entry-' + j;
      var online = this.onlineCourses[j];
      $(id).append(replaceData(online.title, HTMLonlineTitle) + replaceData(online.school, HTMLonlineSchool))
           .append(replaceData(online.date, HTMLonlineDates))
           .append(replaceData(online.url, HTMLonlineURL).replace('#', online.url));
    }
  }
};

var work = {
  'jobs': [
    {'employer': 'SCOOTERBUG, INC. (Disney Preferred Vendor)',
     'title': 'IT Director & Technology Services Manager',
     'location': 'Boston, MA /Orlando, FL',
     'dates': '2012-2015',
     'description': 'Saved $208k annually, cut 40 minutes on average support case handling time, and reduced 60% of the daily support cases by redesigning IT support service processes, unifying IT management tools, training support staff, and implementing new case ticket tracking system with $0 capital investment.Increased revenue by 30% through the design/implementation of customized program for Disney on speculation, resulting in company winning the Disney contract and becoming listed as a preferred vendor. Wrote 260,000 lines of code and built 358 sets of unique functions, including embedded Authorize.Net payment processor. Reduced staff time on data entry by 100% by designing and integrating new data automation software, which enabled company to eliminate data entry contract jobs. Cut spending by 70% (from $5,000 monthly to $1,500 monthly), saved $200k on new infrastructure implementation cost, and decreased IT staff hours for maintaining server hardware and monitoring efforts by partnering with Amazon Web Services to forge a cloud migration plan that is PCI compliant. Started from a test platform, migrated to a live platform, and moved all central programs into the cloud— all done internally.'
    },
    {'employer': 'THE REGISTRY GROUP, LLC (TECHNOLOGY SOLUTION STARTUP)',
     'title': 'Lead Software Developer & Co-Founder',
     'location': 'Boston, MA',
     'dates': '2011-2011',
     'description': 'Created new solution for health care credential/content management. Eliminated 90% of the cost of using a midsized staffing agency and saved $450 per month/per employee. Built software development environment, including desktop development framework, version control server, and team project management platform in AWS Cloud. Designed user interface and data schematics. Built Java function code.'
    },
	{'employer': 'Boston Digital Venture (Digital Solution for Smart Home)',
     'title': 'Business Analyst Internship (Invited)',
     'location': 'Boston, MA',
     'dates': '2010-2011',
     'description': 'Initiated iPhone 4 software applications development project, performed business and marketing analysis, and made & executed the action plan to significantly increase customer retention rate.'
    },
	{'employer': 'DOMAN TACHNOLOGY CO, LTD.(CONSULTING FIRM FOCUSING ON GOVERNMENT CLIENTS)',
     'title': 'IT Consultant ',
     'location': 'Taipei, Taiwan',
     'dates': '2005-2009',
     'description': 'Worked independently and handled top accounts, Taiwan Department of Justice and Chang-Gung Mega Hospital Chain (#1 in the industry). Cultivated excellent customer relationships. Spoke with existing and prospective customers to assess customers’ needs, understand the client company’s business, and provide cost-effective IT solutions. Served as a project technical manager and interfaced with US security software vendors in a big project of building a first cyber crime investigation lab for Taiwan Department of Justice.'
    },
	{'employer': 'ACTION ELECTRONIC CO., LTD. ($150M ELECTRONIC MANUFACTURER)',
     'title': 'Product / Software Development Engineer',
     'location': 'Taoyuan County, Taiwan',
     'dates': '2003-2005',
     'description': 'Designed and developed a prototype of a portable MP4 player to be the next gen flagship product. Embedded system in C code. Outsourced codex firmware to India software developers. Built an online web knowledge base to enhance intercommunication across teams and save time on document filling. Coordinated with cross-functional teams to build a manufacturing modeling system to give executives real-time data regarding factory performance.'
    },
	{'employer': 'ALLIN TECHNOLOGY CO., LTD. (DEC, IBM, HP, AND SUN PARTNER & RESELLER)',
     'title': 'System Support Engineer',
     'location': 'Taipei, Taiwan',
     'dates': '2001-2003',
     'description': 'Provided top tier clients, Taiwan Government and #1 Chunghwa Telecom, service, troubleshooting, and technical support for mainframe systems (OS and hardware components), AP servers, network devices, and disk array systems.Performed mainframe performance tuning. Checked system log for potential threats. Performed regular shutdown maintenance. Tested and verified hardware and support peripherals to ensure they met specifications and requirements by recording and analyzing test data.'
    },
  ],
  'display': function() {
    for (var i in this.jobs) {
      $('#workExperience').append(replaceData(i, HTMLworkStart));
      var id = '#work-entry-' + i;
      var job = this.jobs[i];
      $(id).append((replaceData(job.employer, HTMLworkEmployer) + replaceData(job.title, HTMLworkTitle))
           .replace('href="#"', ''))
           .append(replaceData(job.dates, HTMLworkDates))
           .append(replaceData(job.location, HTMLworkLocation))
           .append(replaceData(job.description, HTMLworkDescription));
    }
  }
};

var projects = {
  'projects': [
    {'title': 'Company New Web Site',
     'dates': '2015',
     'description': 'New Copi Solution Web Site Project',
     'images': [
       'images/main.png',
       'images/it_document.png',
       'images/it_managed.png'
     ]
    }
  ],
  'display': function() {
    for (var i in this.projects) {
      $('#projects').append(replaceData(i, HTMLprojectStart));
      var id = '#project-entry-' + i;
      var project = this.projects[i];
      $(id).append(replaceData(project.title, HTMLprojectTitle))
           .append(replaceData(project.dates, HTMLprojectDates))
           .append(replaceData(project.description, HTMLprojectDescription));
      for (var j in project.images) {
        $(id).append(replaceData(project.images[j], HTMLprojectImage));
      }
    }
  }
};

bio.display();
education.display();
work.display();
projects.display();

$('#mapDiv').append(googleMap);


// $('#main').append(internationalizeButton);
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
    name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}