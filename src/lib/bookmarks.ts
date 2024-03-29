import Aws from '@/components/Icons/Aws'
import Cloudflare from '@/components/Icons/Cloudflare'
import Curl from '@/components/Icons/Curl'
import Dropbox from '@/components/Icons/Dropbox'
import Fastify from '@/components/Icons/Fastify'
import Github from '@/components/Icons/Github'
import Go from '@/components/Icons/Go'
import Haproxy from '@/components/Icons/Haproxy'
import Linux from '@/components/Icons/Linux'
import Mariadb from '@/components/Icons/Mariadb'
import Medium from '@/components/Icons/Medium'
import Mk from '@/components/Icons/Mk'
import Mozilla from '@/components/Icons/Mozilla'
import Mysql from '@/components/Icons/Mysql'
import Nginx from '@/components/Icons/Nginx'
import Openssl from '@/components/Icons/Openssl'
import Simpleicons from '@/components/Icons/Simpleicons'
import Stackoverflow from '@/components/Icons/Stackoverflow'
import Twilio from '@/components/Icons/Twilio'

export const Bookmarks = async () => [
  {
    title: `moz://a SSL generator`,
    desc: `Sane SSL config generator for most web servers and load balancers, I recommend the intermediate config`,
    url: `https://ssl-config.mozilla.org/`,
    Icon: 'Mozilla',
  },
  {
    title: `Chmod calculator`,
    desc: `Convert Linux file permissions between different formats`,
    url: `https://chmod-calculator.com/`,
    Icon: 'Linux',
  },
  {
    title: `AWS EC2 comparison`,
    desc: `A simple page where you can compare AWS EC2 instances using different filters and variables`,
    url: `https://instances.vantage.sh/`,
    Icon: 'Aws',
  },
  {
    title: `CDN Planet`,
    desc: `A site dedicated on providing a comprehensive – facts, figures, and tools – to help you select the right CDN`,
    url: `https://www.cdnplanet.com/`,
    Icon: 'Mk',
  },
  {
    title: `SSL labs`,
    desc: `Test your SSL certificate strength`,
    url: `https://www.ssllabs.com/ssltest/`,
    Icon: 'Openssl',
  },
  {
    title: `Cloudflare and Cache-Control`,
    desc: `To use Cloudflare caching mechanism with efficiency. You need to fully understand how Cloudflare deals with Cache-Control headers`,
    url: `https://support.cloudflare.com/hc/en-us/articles/115003206852`,
    Icon: 'Cloudflare',
  },
  {
    title: `NGINX optimized configs`,
    desc: `Out of the box optimized and sane configuration for NGINX. Explained and documented`,
    url: `https://github.com/h5bp/server-configs-nginx`,
    Icon: 'Github',
  },
  {
    title: `Terminal color scheme`,
    desc: `Visual Terminal color scheme designer. Which you can set as your terminal profile, from custom colors to predefined themes`,
    url: `https://terminal.sexy/`,
    Icon: 'Linux',
  },
  {
    title: `Curl write out`,
    desc: `Get detailed information about a request sent through Curl using the write out option -w, which has a large range of variables that you can include in the output`,
    url: `https://everything.curl.dev/usingcurl/verbose/writeout/`,
    Icon: 'Curl',
  },
  {
    title: `Fastify boilerplate`,
    desc: `This is a feature-complete Fastify application with well-structured and documented code. Made by one of the lead maintainers of the framework`,
    url: `https://github.com/delvedor/fastify-example/`,
    Icon: 'Fastify',
  },
  {
    title: `NGINX thead pools`,
    desc: `Interesting read about NGINX thread pools. Seems like a good experiment to see it's benefit serving static content`,
    url: `https://www.nginx.com/blog/thread-pools-boost-performance-9x/`,
    Icon: 'Nginx',
  },
  {
    title: `Golang pipelines`,
    desc: `A big fundamental part of Golang is having concurrency and parallelism. This explains in-depth some of the techniques used to achieve that`,
    url: `https://blog.golang.org/pipelines`,
    Icon: 'Go',
  },
  {
    title: `MySQL behavior with NUMA`,
    desc: `Detailed article about unpredictable performance and random delays on MySQL when dealing with swap and NUMA`,
    url: `https://blog.jcole.us/2010/09/28/mysql-swap-insanity-and-the-numa-architecture/`,
    Icon: 'Mysql',
  },
  {
    title: `NGINX high-throughput`,
    desc: `From a Dropbox engineer, a must-read article for infrastructure engineers, about optimizing NGINX high-throughput.`,
    url: `https://dropbox.tech/infrastructure/optimizing-web-servers-for-high-throughput-and-low-latency/`,
    Icon: 'Dropbox',
  },
  {
    title: `MariaDB UUID performance`,
    desc: `GUID/UUID Performance limitations and problems when used with MariaDB/MySQL and some possible workarounds`,
    url: `https://mariadb.com/kb/en/guiduuid-performance/`,
    Icon: 'Mariadb',
  },
  {
    title: `NoSQL databases overview`,
    desc: `Overview about NoSQL databases, their behavior and use cases. Something to keep in mind when picking one`,
    url: `https://medium.baqend.com/nosql-databases-a-survey-and-decision-guidance-ea7823a822d/`,
    Icon: 'Medium',
  },
  {
    title: `Designing ElasticSearch clusters`,
    desc: `Pros and cons about ElasticSearch clusters design architectures. Something to consider before integrating Elastic into your stack`,
    url: `https://thoughts.t37.net/designing-the-perfect-elasticsearch-cluster-the-almost-definitive-guide-e614eabc1a87/`,
    Icon: 'Medium',
  },
  {
    title: `Simple icons`,
    desc: `The site I am using for the icons you see. It has over 1500 Free SVG icons for popular brands all on one page`,
    url: `https://simpleicons.org/`,
    Icon: 'Simpleicons',
  },
  {
    title: `High performance Go`,
    desc: `Diagnosing performance problems in your Go applications and fix them. Workshop by Dave Cheney`,
    url: `https://dave.cheney.net/high-performance-go-workshop/sydney-2019.html#license_and_materials/`,
    Icon: 'Go',
  },
  {
    title: `HTTPS on Stack Overflow`,
    desc: `Stack Overflow story about migrating to HTTPS, very long but worth it`,
    url: `https://nickcraver.com/blog/2017/05/22/https-on-stack-overflow/`,
    Icon: 'Stackoverflow',
  },
  {
    title: `moz://a on immutable caching`,
    desc: `A blog from mozilla about speeding up your site using immutable cache headers`,
    url: `https://hacks.mozilla.org/2017/01/using-immutable-caching-to-speed-up-the-web/`,
    Icon: 'Mozilla',
  },
  {
    title: `Twillio and HTTP/2 issues`,
    desc: `Twillio blog sharing their experiments with HTTP/2 and it's limitations, which lead us now to the new HTTP protocol QUIC`,
    url: `https://www.twilio.com/blog/2017/10/http2-issues.html/`,
    Icon: 'Twilio',
  },
  {
    title: `Your only Web Server`,
    desc: `The definitive guide to serve and optimize web services while maintaining stability`,
    url: `https://nginx.org/en/docs/`,
    Icon: 'Nginx',
  },
  {
    title: `The Art of scalability`,
    desc: `Comprehensive, proven approach to scale any software service`,
    url: `https://cbonte.github.io/haproxy-dconv/2.4/intro.html`,
    Icon: 'Haproxy',
  },
]

const Icons = {
  Aws,
  Cloudflare,
  Curl,
  Dropbox,
  Fastify,
  Github,
  Go,
  Haproxy,
  Linux,
  Mariadb,
  Medium,
  Mk,
  Mozilla,
  Mysql,
  Nginx,
  Openssl,
  Simpleicons,
  Stackoverflow,
  Twilio,
}

export const BookmarkIcon = (icon: string): any => Icons[icon]
