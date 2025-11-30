const projects = [
  {
    id:'ad-lab',
    title: 'Enterprise Active Directory Penetration Testing Lab',
    desc: 'A configurable AD lab environment to practice lateral movement, privilege escalation, and detection evasion techniques in enterprise Windows networks.',
    tags:['Active Directory','BloodHound','Windows','PowerShell'],
    highlights:['Custom GPO misconfigurations to simulate real-world weaknesses','Playbooks for persistence and escalation','Documentation and lab automation scripts'],
    github:'#',
    demo:'#'
  },
  {
    id:'vuln-framework',
    title: 'Automated Vulnerability Assessment Framework',
    desc: 'Pipeline that orchestrates scanners, custom checks, and reporting to automate discovery and triage at scale.',
    tags:['Python','Nmap','API','Automation'],
    highlights:['Modular plugins for tool integration','Scheduled discovery with alerts','Exportable executive and technical reports'],
    github:'#',
    demo:'#'
  },
  {
    id:'web-suite',
    title: 'Web Application Security Testing Suite',
    desc: 'Toolkit combining custom Burp extensions and automated test harnesses for common web vulnerabilities and fuzzing.',
    tags:['Burp','Java','Fuzzing','CI'],
    highlights:['Reusable Burp plugins','Automated CI tests for regressions','Payload management and reporting'],
    github:'#',
    demo:'#'
  },
  {
    id:'red-team',
    title: 'Red Team Adversary Simulation',
    desc: 'Full-scope adversary emulation playbooks and infrastructure templates for realistic red team engagements.',
    tags:['Adversary Emulation','C2','TTPs'],
    highlights:['Customizable campaign templates','Lessons-learned reports and detection mappings','Simulated attacker toolchains'],
    github:'#',
    demo:'#'
  },
  {
    id:'siem-platform',
    title: 'SIEM Detection Engineering Platform',
    desc: 'Platform to author, test, and deploy detection rules with synthetic telemetry and validation workflows.',
    tags:['SIEM','Detection','KQL','Elastic'],
    highlights:['Rule testing with synthetic logs','Versioned rule repository','Integration with alerting workflows'],
    github:'#',
    demo:'#'
  },
  {
    id:'devsecops',
    title: 'DevSecOps Security Pipeline',
    desc: 'Secure CI/CD pipeline patterns including vulnerability gating, secrets scanning, and infrastructure as code checks.',
    tags:['CI/CD','IaC','Scanning','Policy'],
    highlights:['Pre-merge scanning hooks','Automated policy enforcement','Shift-left training and docs'],
    github:'#',
    demo:'#'
  }
]

export default projects
