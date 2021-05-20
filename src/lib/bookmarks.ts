import {
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
  Mozilla,
  Mysql,
  Nginx,
  Openssl,
  Simpleicons,
  Stackoverflow,
  Twilio,
} from '@/components/Icons'

const iconClassName = 'w-12 h-12  min-w-sm fill-current'

const Bookmarks = [
  {
    title: `Chmod Calculator`,
    desc: `Convert Linux file permissions between different formats`,
    url: `https://chmod-calculator.com/`,
    icon: Linux({
      className: iconClassName,
    }),
  },
  {
    title: `SSL Labs`,
    desc: `Test your SSL certificate strength`,
    url: `https://www.ssllabs.com/ssltest/`,
    icon: Openssl({
      className: iconClassName,
    }),
  },
  {
    title: `moz://a SSL generator`,
    desc: `Sane SSL config generator for most web servers and load balancers, I recommend the intermediate config`,
    url: `https://ssl-config.mozilla.org/`,
    icon: Mozilla({
      className: iconClassName,
    }),
  },
  {
    title: `AWS EC2 Comparison`,
    desc: `A simple page where you can compare AWS EC2 instances using different filters and variables`,
    url: `https://instances.vantage.sh/`,
    icon: Aws({
      className: iconClassName,
    }),
  },
  {
    title: `Cloudflare and Cache-Control`,
    desc: `To use Cloudflare caching mechanism with efficiency. You need to fully understand how Cloudflare deals with Cache-Control headers`,
    url: `https://support.cloudflare.com/hc/en-us/articles/115003206852`,
    icon: Cloudflare({
      className: iconClassName,
    }),
  },
  {
    title: `NGINX configs`,
    desc: `Out of the box optimized and sane configuration for NGINX. Explained and documented`,
    url: `https://github.com/h5bp/server-configs-nginx`,
    icon: Github({
      className: iconClassName,
    }),
  },
  {
    title: `Curl write out`,
    desc: `Get detailed information about a request sent through Curl using the write out option -w, which has a large range of variables that you can include in the output`,
    url: `https://everything.curl.dev/usingcurl/verbose/writeout/`,
    icon: Curl({
      className: iconClassName,
    }),
  },
  {
    title: `Fastify boilerplate`,
    desc: `Fastify, the new kid in town. This is a feature-complete application with well-structured and documented code. Made by one of the lead maintainers of the framework`,
    url: `https://github.com/delvedor/fastify-example/`,
    icon: Fastify({
      className: iconClassName,
    }),
  },
  {
    title: `NGINX threading`,
    desc: `Interesting read about NGINX thread pools. Seems like a good experiment to see it's benefit serving static content`,
    url: `https://www.nginx.com/blog/thread-pools-boost-performance-9x/`,
    icon: Nginx({
      className: iconClassName,
    }),
  },
  {
    title: `Golang pipelines`,
    desc: `A big fundamental part of Golang is having concurrency and parallelism. This explains in-depth some of the techniques used to achieve that`,
    url: `https://blog.golang.org/pipelines`,
    icon: Go({
      className: iconClassName,
    }),
  },
  {
    title: `MySQL behavior with NUMA`,
    desc: `Detailed article about unpredictable performance and random delays on MySQL when dealing with swap and NUMA`,
    url: `https://blog.jcole.us/2010/09/28/mysql-swap-insanity-and-the-numa-architecture/`,
    icon: Mysql({
      className: iconClassName,
    }),
  },
  {
    title: `NGINX High throughput and low latency`,
    desc: `From a Dropbox engineer, a must-read article for infrastructure engineers, about optimizing NGINX high-throughput.`,
    url: `https://dropbox.tech/infrastructure/optimizing-web-servers-for-high-throughput-and-low-latency/`,
    icon: Dropbox({
      className: iconClassName,
    }),
  },
  {
    title: `MariaDB UUID performance`,
    desc: `GUID/UUID Performance limitations and problems when used with MariaDB/MySQL and some possible workarounds`,
    url: `https://mariadb.com/kb/en/guiduuid-performance/`,
    icon: Mariadb({
      className: iconClassName,
    }),
  },
  {
    title: `NoSQL databases overview`,
    desc: `Overview about NoSQL databases, their behavior and use cases. Something to keep in mind when picking one`,
    url: `https://medium.baqend.com/nosql-databases-a-survey-and-decision-guidance-ea7823a822d/`,
    icon: Medium({
      className: iconClassName,
    }),
  },
  {
    title: `Designing ElasticSearch Clusters`,
    desc: `Pros and cons about ElasticSearch clusters design architectures. Something to consider before integrating Elastic into your stack`,
    url: `https://thoughts.t37.net/designing-the-perfect-elasticsearch-cluster-the-almost-definitive-guide-e614eabc1a87/`,
    icon: Medium({
      className: iconClassName,
    }),
  },
  {
    title: `Simple Icons`,
    desc: `The site I am using for the icons you see. It has over 1500 Free SVG icons for popular brands all on one page`,
    url: `https://simpleicons.org/`,
    icon: Simpleicons({
      className: iconClassName,
    }),
  },
  {
    title: `High Performance Go`,
    desc: `Diagnosing performance problems in your Go applications and fix them. Workshop by Dave Cheney`,
    url: `https://dave.cheney.net/high-performance-go-workshop/sydney-2019.html#license_and_materials/`,
    icon: Go({
      className: iconClassName,
    }),
  },
  {
    title: `HTTPS on Stack Overflow`,
    desc: `Stack Overflow story about migrating to HTTPS, very long but worth it`,
    url: `https://nickcraver.com/blog/2017/05/22/https-on-stack-overflow/`,
    icon: Stackoverflow({
      className: iconClassName,
    }),
  },
  {
    title: `moz://a on immutable caching`,
    desc: `A blog from mozilla about speeding up your site using immutable cache headers`,
    url: `https://hacks.mozilla.org/2017/01/using-immutable-caching-to-speed-up-the-web/`,
    icon: Mozilla({
      className: iconClassName,
    }),
  },
  {
    title: `Twillio and HTTP/2 issues`,
    desc: `Twillio blog sharing their experiments with HTTP/2 and it's limitations, which lead us now to the new HTTP protocol QUIC`,
    url: `https://www.twilio.com/blog/2017/10/http2-issues.html/`,
    icon: Twilio({
      className: iconClassName,
    }),
  },
  {
    title: `Software Engineering The Definitive Guide`,
    desc: `The definitive guide to building software, released April 20,2021 with the latest techniques`,
    url: `https://nginx.org/en/docs/`,
    icon: Nginx({
      className: iconClassName,
    }),
  },
  {
    title: `The Art of Scalability`,
    desc: `Comprehensive, proven approach to scale any software service`,
    url: `https://cbonte.github.io/haproxy-dconv/2.4/intro.html`,
    icon: Haproxy({
      className: iconClassName,
    }),
  },
]

export default Bookmarks
