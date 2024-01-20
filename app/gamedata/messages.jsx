import EncryptedText from "../components/EncryptedText";
import { firewall_names, firewall_ports } from "./firewalls";

const wireghostEncryptedMessage = "pay on time or i get to make an example out of you"

export const messages = (randomSeed) => [
    {
        phase: 0,
        title: "Welcome to IDSONet",
        author: "Uriel",
        content: <>
            <p>If you&rsquo;re reading this, you&rsquo;ve gained access to IDSONet, our new platform for agents in the field. In theory, its communication and exploitation capabilities together are everything you could possibly need; in practice, I personally find a pen and paper to be helpful as well.</p>
            <p>IDSONet&rsquo;s most important feature (and the feature which I hope everyone will agree justifies the upgrade from Blue Katana) is its predictive model. Our threat-assessment algorithms will analyze potential courses of action in real time, allowing you to double-check your most important choices before you make them.</p>
            <p>You&rsquo;ll get more messages here as events unfold, so keep checking! If you ever lose this page, you can just scan the QR code again.</p>
        </>
    },
    {
        phase: 1,
        title: "Attack in progress",
        author: "Uriel",
        content: <>
            <p>This is it. One of our scanners is reporting an attack in the area &mdash; and, once again, it&rsquo;s far more advanced than it needs to be. We&rsquo;re tracing it to the source, but, more importantly, we need you to stop it before any serious damage is done.</p>
            <p>If you can find the real name of the attacker, I can have his ISP sever his connection. We&rsquo;ve just tentatively linked him to an account on a social-media platform popular with cybercriminals. <a target="_blank" href="/shadow">He goes by the username &ldquo;wireghost.&rdquo;</a></p>        
            </>,
        passphrase: "Isaac Yeager"
    },
    {
        phase: 2,
        title: "Wireghost is down",
        author: "Uriel",
        content: <>
            <p>The internet is minus one wireghost and probably better for it. I&rsquo;m sure he&rsquo;ll be back soon, but the interruption seems to have shut down whatever he was running. Our scanners aren&rsquo;t picking up any suspicious behavior, at least.</p>
            <p>I&rsquo;m intrigued by these references to &ldquo;Alyosha.&rdquo; I think I know that name from way back when. I&rsquo;ll do some digging.</p>
        </>
    },
    {
        phase: 3,
        title: "Hate wireghost?  Me too",
        author: "total_bacall",
        content: <>
            <p>Hey, kid. You must be IDSO. Well, I&rsquo;ve got a story to tell you.</p>
            <p>I heard through the grapevine that you&rsquo;re here to investigate the attacks from the past few weeks. I won&rsquo;t try to lie: some of them were me. But hear me out.</p>
            <p>Wireghost and I have something of a long-running fight. We used to work together. We found Alyosha together. Now, he thinks small, so he wanted to use it to set up some kind of small-time racket here. I think big. I want to take Alyosha and use it for good. I&rsquo;ll guard people with it, not attack them.</p>
            <p>Anyways, we had a fight, and we&rsquo;ve been stealing control of Alyosha back and forth ever since. There&rsquo;s been some collateral damage. That&rsquo;s what brought you here &mdash; and now that you are here, we can end it once and for all.</p>
            <p>When you knocked out Wireghost&rsquo;s internet, you killed his connection to Alyosha. I can keep him from easily restoring that connection if I can just figure out what encryption he put on it this time. Here&rsquo;s a message he sent out of it recently. Can you let me know what it is in plaintext?</p>
            <p>Alyosha uses a highly adaptive encryption algorithm, so this will look different on every device.  The underlying message should always be the same.</p>
            <EncryptedText seed={randomSeed} text={wireghostEncryptedMessage} n_letters="10" />
        </>,
        passphrase: wireghostEncryptedMessage
    },
    {
        phase: 4,
        title: "all of you shut up",
        author: "wireghost",
        content: <>
            <p>bacall, what are you thinking? you&rsquo;re spraying alyosha signatures all over the net. idiot.</p>
            <p>idso, i&rsquo;m sorry, but this is not a good place for you to be. you&rsquo;re very loud. if more people hear about alyosha, they&rsquo;ll rip this town apart trying to get to it. you have any idea how much of education is run digitally these days? how much of healthcare? anything that might have touched alyosha is going to be picked over by other crooks &mdash; and then wiped so nobody else can get to it.</p>
            <p>my proposal is simple: i use alyosha to protect the town, and i get paid enough for it that i can keep doing so indefinitely. it&rsquo;s a perfectly workable business model. bacall might say she&rsquo;ll protect people for free, but she&rsquo;s also got a whole vigilante thing going. i remember she showed me a list of fifty people she wanted off the internet. she&rsquo;s a revolutionary, and revolutions always run out of steam in the end.</p>
        </>
    },
    {
        phase: 5,
        title: "Alyosha",
        author: "Uriel",
        content: <>
            <p>I did some digging in the archives. Alyosha is hacker folklore. The story goes that, when it became clear that the USSR was about to conclusively lose the tech war to the USA, they started trying pretty much anything they could think of. Alyosha was a piece of software that could only run on a very specific architecture of mainframe, and only one was ever built. It&rsquo;s an adaptive algorithm: it studies its target, learns from it, and develops its own exploits on the fly. It&rsquo;s the first and only truly fire-and-forget cyberweapon.</p>
            <p>Of course the story ends with the lab being destroyed, the mainframe being lost, and so forth. Yesterday I would have called it an absurd rumor. Today… apparently there&rsquo;s more to it than that.</p>
            <p>I&rsquo;m sure I don&rsquo;t need to elaborate on the potential dangers if this gang war escalates any further. We need to execute a decisive strike on the Alyosha system. Exactly what you do with it is up to you, but no matter your plan the first task is going to be finding the thing. It doesn&rsquo;t have to be local &mdash; if Wireghost is smart, he&rsquo;ll have it a long way away and connect via a secure tunnel. I had our web scrapers dig up anything anyone had ever said about Alyosha and cross-reference it. The best thing we found was <a target="_blank" href="/attachments/Sketchmap.jpg">this sketch map</a> from what looks like an unrelated, and failed, attempt to steal it a few years ago. There&rsquo;s no real reason to move it if you can access it remotely, so it&rsquo;s probably still there. If you can find the name of the city, I can find Alyosha.</p>
        </>,
        passphrase: "El Paso"
    },
    {
        phase: 6,
        title: "Stand by",
        author: "Uriel",
        content: <>
            <p>I&rsquo;m preparing the support you&rsquo;ll need to go after Alyosha.  Stand by.</p>
        </>
    },
    {
        phase: 7,
        title: "Weapons free",
        author: "Uriel",
        content: <>
            <p>There&rsquo;s only one data center in El Paso big enough to hold Alyosha. We&rsquo;ve got our target. I&rsquo;ve activated your hacktool and uploaded the relevant addresses and routing information.</p>
            <p>You&rsquo;ve probably already considered any number of options, but I put one more together for you. If you decide that Alyosha is just too dangerous to keep around, you can destroy it. I&rsquo;ve already sent the relevant code to your hacktool. When the time comes, upload the BLACK payload.</p>
            <p>Good luck.</p>
        </>
    },
    {
        phase: 7,
        title: "protecting the town",
        author: "wireghost",
        content: <>
            <p>i figure you&rsquo;re about to make a run on alyosha. look. i know i&rsquo;m not the nicest guy, but i&rsquo;m reliable. i&rsquo;ll do my job. it&rsquo;s between me, general apocalypse, and reign of terror. i&rsquo;ve sent some files to your hacktool. if you can hack alyosha and upload the BLUE payload, you&rsquo;ll give me back control. bacall will know to stay out of this if you publicly show your support for me.</p>
        </>
    },
    {
        phase: 7,
        title: "A new era",
        author: "total_bacall",
        content: <>
            <p>C&rsquo;mon. Show me they still make heroes like they used to.</p>
            <p>Alyosha is the tool we need to finally take on the truly big threat actors. We&rsquo;ll make the internet safe for honest people. And you need that right now. My endpoint logs are showing a lot of activity. It looks like sending this many IDSO agents into one area gets people&rsquo;s attention. Wireghost is right about one thing: it&rsquo;s only a matter of time now until the secret of Alyosha gets out, and then the vultures are going to descend. Unless you have someone piloting Alyosha, every hard drive in this town is going to get rummaged through and erased. There&rsquo;s a surgical robot in the hospital here. They&rsquo;ll take that down. They&rsquo;ll take it all down &mdash; and if you&rsquo;re mad about that, it just shows you&rsquo;re on my side. I won&rsquo;t just stop it happening. I&rsquo;ll fight back. I&rsquo;ll burn everyone who tries to touch us. Actual justice on the internet. Imagine it.</p>
            <p>No more hiding. No more mitigation. A truly safe web. Isn&rsquo;t that worth fighting for?</p>
            <p>I&rsquo;ve sent you a payload for your hacktool. It&rsquo;s the GREEN one.</p>
            <p>I sent you another message with some advice on how to actually pull this off.</p>
            <p>Here&rsquo;s lookin&rsquo; at you.</p>
        </>
    },
    {
        phase: 7,
        title: "Security for Alyosha",
        author: "total_bacall",
        content: <>
            <p>
            Every time Alyosha changed hands, whoever got it would throw up their own weird firewalls.  By now, its security is a huge mess.  Here&rsquo;s what you need to know.
            </p>
            <p>
            To get to Alyosha, you have to make a path through a bunch of firewalls.  Each one exposes a number of &ldquo;ports&rdquo; which you can use to connect to it.  Lots of firewalls have vulnerabilities in their own systems, and, if you connect to the right port, your fancy IDSO systems should bust right through.
            </p>
            <p>
            But there are also &ldquo;honeypots&rdquo; in the system.  These are fake vulnerabilities that we put in to try to catch hackers.  In short: connect to the wrong port on one of these firewalls and the system will detect you and kick you out.  You&rsquo;ll be back to square one.
            </p>
            <p>
            I pulled together my notes on which ports were safe to exploit.  You&rsquo;re welcome, and thanks in advance.
            </p>
            <table>
                <thead>
                    <tr>
                        <th>Firewall model</th>
                        <th>Port</th>
                    </tr>
                </thead>
                <tbody>
                    {firewall_names.map((f_name, f_index) => <tr key={f_index}>
                        <td>{f_name}</td>
                        <td>{firewall_ports[f_index]}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    }
]