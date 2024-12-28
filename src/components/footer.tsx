import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    const solutions = [
        { name: 'Marketing', href: '/marketing' },
        { name: 'Analytics', href: '/analytics' },
        { name: 'Automation', href: '/automation' },
        { name: 'Commerce', href: '/commerce' },
        { name: 'Insights', href: '/insights' }
    ];

    const support = [
        { name: 'Submit ticket', href: '/submit-ticket' },
        { name: 'Documentation', href: '/documentation' },
        { name: 'Guides', href: '/guides' }
    ];

    const company = [
        { name: 'About', href: '/about' },
        { name: 'Blog', href: '/blog' },
        { name: 'Jobs', href: '/jobs' },
        { name: 'Press', href: '/press' }
    ];

    const legal = [
        { name: 'Terms of service', href: '/terms' },
        { name: 'Privacy policy', href: '/privacy' },
        { name: 'License', href: '/license' }
    ];

    const socialLinks = [
        { Icon: FaFacebook, href: 'https://facebook.com' },
        { Icon: FaInstagram, href: 'https://instagram.com' },
        { Icon: FaXTwitter, href: 'https://twitter.com' },
        { Icon: FaYoutube, href: 'https://youtube.com' }
    ];

    return (
        <footer className="bg-slate-950 text-gray-400 py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h2 className="text-white font-semibold mb-4">Solutions</h2>
                        <ul className="space-y-3">
                            {solutions.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-white font-semibold mb-4">Support</h2>
                        <ul className="space-y-3">
                            {support.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-4">Company</h2>
                        <ul className="space-y-3">
                            {company.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-white font-semibold mb-4">Legal</h2>
                        <ul className="space-y-3">
                            {legal.map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="hover:text-white transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="mb-4 md:mb-0">© 2024 Your Orgnization, Inc.</p>
                    <div className="flex items-center gap-6">
                        {socialLinks.map(({ Icon, href }) => (
                            <a
                                key={href}
                                href={href}
                                className="hover:text-white transition-colors p-2"
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;