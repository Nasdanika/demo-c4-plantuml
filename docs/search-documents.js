var searchDocuments = {"systems/external/mainframe.html":{"action-uuid":"e493de81-be98-4a55-a02e-78735865d7e9","title":"Mainframe Banking System","content":"Stores all the core banking information about customers, accounts, transactions, etc."},"index.html":{"action-uuid":"c5e179ec-29ba-43d8-8ded-2260945a0ec7","title":"Internet Banking System","content":"This is a demo of a web site generated from an action model with PlantUML C4 representations. Diagram elements below are linked to the pages (actions) of respective components. !include &lt;c4/C4_Context.puml&gt; 'ref http://plantuml.com/stdlib !include &lt;office/Users/user.puml&gt; !include &lt;office/Users/mobile_user.puml&gt; 'LAYOUT_WITH_LEGEND title System Context diagram for Internet Banking System Person(customer , Customer , &quot;&lt;$user&gt; &lt;$mobile_user&gt;\\n A customer of the bank, with personal bank accounts&quot;, $link=&quot;customer.html&quot;) System(banking_system, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;, $link=&quot;systems/internet-banking/index.html&quot;) System_Ext(mail_system, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;, $link=&quot;systems/external/e-mail.html&quot;) System_Ext(mainframe, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;, $link=&quot;systems/external/mainframe.html&quot;) Rel(customer, banking_system, &quot;Uses&quot;) Rel_Back(customer, mail_system, &quot;Sends e-mails to&quot;) Rel_Neighbor(banking_system, mail_system, &quot;Sends e-mails&quot;, &quot;SMTP&quot;) Rel(banking_system, mainframe, &quot;Uses&quot;) Detailed description goes here."},"customer.html":{"action-uuid":"90582fd6-a091-4446-a781-68423c83b591","title":"Customer","content":"A customer of the bank, with personal bank accounts."},"systems/internet-banking/index.html":{"action-uuid":"7d75575b-5ced-4b20-8afa-ff9c064444bb","title":"Internet Banking System","content":"Allows customers to view information about their bank accounts and make payments. '!includeurl https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/master/C4_Container.puml !include &lt;c4/C4_Container.puml&gt; 'ref http://plantuml.com/stdlib !include &lt;office/Users/user.puml&gt; !include &lt;office/Users/mobile_user.puml&gt; LAYOUT_WITH_LEGEND() title Container diagram for Internet Banking System Person(customer , Customer , &quot;&lt;$user&gt; &lt;$mobile_user&gt;\\n A customer of the bank, with personal bank accounts&quot;, $link=&quot;../../customer.html&quot; ) System_Boundary(c1, &quot;Internet Banking&quot;) { Container(web_app, &quot;Web Application&quot;, &quot;Java, Spring MVC&quot;, &quot;Delivers the static content and the Internet banking SPA&quot;, $link=&quot;applications/web/index.html&quot;) Container(spa, &quot;Single-Page App&quot;, &quot;JavaScript, Angular&quot;, &quot;Provides all the Internet banking functionality to cutomers via their web browser&quot;, $link=&quot;applications/spa/index.html&quot;) Container(mobile_app, &quot;Mobile App&quot;, &quot;C#, Xamarin&quot;, &quot;Provides a limited subset of the Internet banking functionality to customers via their mobile device&quot;, $link=&quot;applications/mobile/index.html&quot;) ContainerDb(database, &quot;Database&quot;, &quot;SQL Database&quot;, &quot;Stores user registraion information, hased auth credentials, access logs, etc.&quot;, $link=&quot;database/index.html&quot;) Container(backend_api, &quot;API Application&quot;, &quot;Java, Docker Container&quot;, &quot;Provides Internet banking functionality via API&quot;, $link=&quot;applications/api/index.html&quot;) } System_Ext(email_system, &quot;E-Mail System&quot;, &quot;The internal Microsoft Exchange system&quot;, $link=&quot;../external/e-mail.html&quot;) System_Ext(banking_system, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;, $link=&quot;../external/mainframe.html&quot;) Rel(customer, web_app, &quot;Uses&quot;, &quot;HTTPS&quot;) Rel(customer, spa, &quot;Uses&quot;, &quot;HTTPS&quot;) Rel(customer, mobile_app, &quot;Uses&quot;) Rel_Neighbor(web_app, spa, &quot;Delivers&quot;) Rel(spa, backend_api, &quot;Uses&quot;, &quot;async, JSON/HTTPS&quot;) Rel(mobile_app, backend_api, &quot;Uses&quot;, &quot;async, JSON/HTTPS&quot;) Rel_Back_Neighbor(database, backend_api, &quot;Reads from and writes to&quot;, &quot;sync, JDBC&quot;) Rel_Back(customer, email_system, &quot;Sends e-mails to&quot;) Rel_Back(email_system, backend_api, &quot;Sends e-mails using&quot;, &quot;sync, SMTP&quot;) Rel_Neighbor(backend_api, banking_system, &quot;Uses&quot;, &quot;sync/async, XML/HTTPS&quot;)"},"systems/external/e-mail.html":{"action-uuid":"da5f49e8-aaae-42a2-acfa-01a24ef3e69c","title":"E-mail system","content":"The internal Microsoft Exchange e-mail system."},"systems/internet-banking/applications/api/index.html":{"path":"Internet Banking System/Applications/API","action-uuid":"3213d019-8388-4771-a36d-33c5ad8b7743","title":"API","content":"Provides internet banking functionality via API. '!includeurl https://raw.githubusercontent.com/RicardoNiepel/C4-PlantUML/master/C4_Component.puml !include &lt;c4/C4_Component.puml&gt; LAYOUT_WITH_LEGEND() title Component diagram for Internet Banking System - API Application Container(spa, &quot;Single Page Application&quot;, &quot;javascript and angular&quot;, &quot;Provides all the internet banking functionality to customers via their web browser.&quot;, $link=&quot;../spa/index.html&quot;) Container(ma, &quot;Mobile App&quot;, &quot;Xamarin&quot;, &quot;Provides a limited subset ot the internet banking functionality to customers via their mobile mobile device.&quot;, $link=&quot;../mobile/index.html&quot;) ContainerDb(db, &quot;Database&quot;, &quot;Relational Database Schema&quot;, &quot;Stores user registration information, hashed authentication credentials, access logs, etc.&quot;, $link=&quot;../../database/index.html&quot;) System_Ext(mbs, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;, $link=&quot;../../../external/mainframe.html&quot;) Container_Boundary(api, &quot;API Application&quot;) { Component(sign, &quot;Sign In Controller&quot;, &quot;MVC Rest Controlle&quot;, &quot;Allows users to sign in to the internet banking system&quot;, $link=&quot;controllers/sign-in/index.html&quot;) Component(accounts, &quot;Accounts Summary Controller&quot;, &quot;MVC Rest Controlle&quot;, &quot;Provides customers with a summory of their bank accounts&quot;, $link=&quot;controllers/accounts-summary/index.html&quot;) Component(security, &quot;Security Component&quot;, &quot;Spring Bean&quot;, &quot;Provides functionality related to singing in, changing passwords, etc.&quot;, $link=&quot;beans/security-component/index.html&quot;) Component(mbsfacade, &quot;Mainframe Banking System Facade&quot;, &quot;Spring Bean&quot;, &quot;A facade onto the mainframe banking system.&quot;, $link=&quot;facades/mainframe/index.html&quot;) Rel(sign, security, &quot;Uses&quot;) Rel(accounts, mbsfacade, &quot;Uses&quot;) Rel(security, db, &quot;Read &amp; write to&quot;, &quot;JDBC&quot;) Rel(mbsfacade, mbs, &quot;Uses&quot;, &quot;XML/HTTPS&quot;) } Rel(spa, sign, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;) Rel(spa, accounts, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;) Rel(ma, sign, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;) Rel(ma, accounts, &quot;Uses&quot;, &quot;JSON/HTTPS&quot;)"}}