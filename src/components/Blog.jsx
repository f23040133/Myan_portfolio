import React, { useState } from 'react'
import { Calendar, Clock, ArrowRight, X } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding SQL Injection Attacks',
    excerpt: 'A comprehensive guide to SQL injection vulnerabilities, how they work, and how to prevent them in your applications.',
    date: 'Nov 15, 2024',
    readTime: '8 min read',
    category: 'Web Security',
    content: `
Understanding SQL Injection Attacks

SQL Injection is one of the most critical web application vulnerabilities. In this post, we'll explore how it works and how to protect against it.

What is SQL Injection?

SQL Injection is a code injection technique that attackers use to exploit vulnerabilities in an application's database layer. By inserting malicious SQL code into input fields, attackers can:

• Access unauthorized data
• Modify or delete database records
• Execute administrative operations on the database
• In some cases, issue commands to the operating system

How It Works

Consider this vulnerable PHP code:

\`\`\`php
$username = $_POST['username'];
$password = $_POST['password'];
$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
\`\`\`

An attacker could input: \`admin' OR '1'='1\` as the username, which would make the query:

\`\`\`sql
SELECT * FROM users WHERE username='admin' OR '1'='1' AND password=''
\`\`\`

Since '1'='1' is always true, this bypasses authentication.

Prevention Methods

1. Use Prepared Statements: Always use parameterized queries
2. Input Validation: Validate and sanitize all user inputs
3. Least Privilege: Database accounts should have minimal necessary permissions
4. Error Handling: Don't expose database errors to users

Example: Secure Code

\`\`\`python
# Using parameterized queries in Python
cursor.execute("SELECT * FROM users WHERE username=? AND password=?", (username, password))
\`\`\`

Stay safe and always validate your inputs!
    `
  },
  {
    id: 2,
    title: 'Top 10 Python Libraries for Cybersecurity',
    excerpt: 'Discover the essential Python libraries every cybersecurity professional should know for penetration testing and security analysis.',
    date: 'Nov 10, 2024',
    readTime: '6 min read',
    category: 'Tools',
    content: `
Top 10 Python Libraries for Cybersecurity

Python has become the go-to language for cybersecurity professionals. Here are the top 10 libraries you should master.

1. Scapy - Packet Manipulation

Scapy is a powerful Python library for packet manipulation and network scanning.

\`\`\`python
from scapy.all import *
# Send ICMP packet
send(IP(dst="192.168.1.1")/ICMP())
\`\`\`

2. Requests - HTTP Library

Perfect for testing web applications and APIs.

\`\`\`python
import requests
response = requests.get('https://api.example.com', headers={'User-Agent': 'SecurityBot'})
\`\`\`

3. Beautiful Soup - Web Scraping

Extract data from HTML and XML files for reconnaissance.

4. Paramiko - SSH Protocol

Automate SSH connections and remote command execution.

5. Cryptography - Encryption

Implement encryption and decryption in your security tools.

6. Nmap - Network Scanner

Python wrapper for the popular Nmap security scanner.

7. Pwntools - CTF Framework

Essential for Capture The Flag competitions.

8. IMpacket - Network Protocols

Work with network protocols like SMB, MSRPC, and more.

9. Volatility - Memory Forensics

Analyze RAM dumps for malware and artifacts.

10. PyCrypto - Cryptographic Functions

Implement various cryptographic algorithms.

Conclusion

These libraries form the foundation of Python-based security tools. Master them to build powerful security solutions!
    `
  },
  {
    id: 3,
    title: 'My Journey to Google Cybersecurity Certificate',
    excerpt: 'Sharing my experience and tips for completing the Google Cybersecurity Professional Certificate program.',
    date: 'Nov 5, 2024',
    readTime: '5 min read',
    category: 'Career'
  },
  {
    id: 4,
    title: 'Network Scanning Techniques with Nmap',
    excerpt: 'Learn advanced Nmap scanning techniques for network reconnaissance and vulnerability assessment.',
    date: 'Oct 28, 2024',
    readTime: '10 min read',
    category: 'Network Security'
  }
]

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  return (
    <section id="blog" className="py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Blog & Articles
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Sharing my knowledge and experiences in cybersecurity, programming, and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="glass-card p-6 rounded-lg border border-slate-800 hover:border-blue-500/30 transition-all group cursor-pointer"
              onClick={() => setSelectedPost(post)}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-4 text-slate-500 text-sm">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-400 mb-4 leading-relaxed">
                {post.excerpt}
              </p>

              <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group-hover:gap-3">
                Read More
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Blog Post Modal */}
        {selectedPost && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-lg max-w-4xl w-full my-8 relative">
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 hover:bg-slate-800 rounded-lg transition-colors z-10"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full">
                    {selectedPost.category}
                  </span>
                  <div className="flex items-center gap-4 text-slate-500 text-sm">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {selectedPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                </div>

                <h2 className="text-3xl font-bold mb-6">{selectedPost.title}</h2>

                {selectedPost.content ? (
                  <div className="prose prose-invert prose-blue max-w-none">
                    <div className="text-slate-300 leading-relaxed space-y-4 whitespace-pre-line blog-content">
                      {selectedPost.content}
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-slate-400 text-lg">Coming Soon...</p>
                    <p className="text-slate-500 mt-2">This article is currently being written.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
