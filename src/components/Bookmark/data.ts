import {
  Cloudflare,
  Curl,
  Dropbox,
  Fastify,
  Github,
  Go,
  Mariadb,
  Medium,
  Mozilla,
  Mysql,
  Nginx,
  Simpleicons,
} from '@/components/Icons'

const Bookmarks = [
  {
    title: 'NGINX thread pooling',
    desc:
      'Interesting read about NGINX thread pools, seems like it could benefit serving static content static content',
    url: 'https://www.nginx.com/blog/thread-pools-boost-performance-9x/',
    icon: Nginx({
      className: 'w-12 h-12  min-w-sm fill-current',
    }),
  },
  {
    title: 'moz://a SSL generator',
    desc:
      'Sane SSL config generator for most web servers and load balancers, I recommend the intermediate config',
    url: 'https://ssl-config.mozilla.org/',
    icon: Mozilla({
      className: 'w-12 h-12  min-w-sm fill-current',
    }),
  },
  {
    title: 'Golang: pipelines and cancellation',
    desc:
      'A big fundamental part of Golang is concurrency & parallelism, this explains in depth about some of the techniques used to achieve that',
    url: 'https://blog.golang.org/pipelines',
    icon: Go({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'MySQL behaviour with swap and NUMA',
    desc:
      'Detailed article about unpredictable performance and random delays on MySQL when dealing with swap and NUMA',
    url:
      'https://blog.jcole.us/2010/09/28/mysql-swap-insanity-and-the-numa-architecture/',
    icon: Mysql({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'High throughput and low latency web servers',
    desc:
      'From Dropbox engineer, a must read article for infrastructure engineers, about NGINX high-throughput, reliability, performance, and efficiency',
    url:
      'https://thoughts.t37.net/designing-the-perfect-elasticsearch-cluster-the-almost-definitive-guide-e614eabc1a87/',
    icon: Dropbox({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'Understanding Origin Cache-Control',
    desc:
      'To use Cloudflare caching mechanism with efficiency, You need to fully understand how Cloudflare deals with Cache-Control headers',
    url: 'https://support.cloudflare.com/hc/en-us/articles/115003206852',
    icon: Cloudflare({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'Nginx HTTP server boilerplate configs',
    desc:
      'Out of the box optimized and sane configuration for NGINX, explained and documented',
    url: 'https://github.com/h5bp/server-configs-nginx',
    icon: Github({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'Fastify, best practices, and recommendations boilerplate',
    desc:
      'Fastify, the new kid in town. This is a feature complete application with a well structured & documented code. Made by one the lead mainteners of the framework',
    url: 'https://github.com/delvedor/fastify-example/',
    icon: Fastify({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'MariaDB and UUID performance',
    desc:
      'GUID/UUID Performance limitations and problems when used with MariaDB/MySQL. And some possible workarounds',
    url: 'https://mariadb.com/kb/en/guiduuid-performance/',
    icon: Mariadb({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'NoSQL databases overview',
    desc:
      'NoSQL databases overview, their behaviour, use cases to make informed decision picking one when the time comes',
    url:
      'https://medium.baqend.com/nosql-databases-a-survey-and-decision-guidance-ea7823a822d/',
    icon: Medium({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'Curl write out',
    desc:
      'Get detailed information about a request sent through Curl using the write out option -w, which has a large range of variables that you can include in the output',
    url: 'https://everything.curl.dev/usingcurl/verbose/writeout/',
    icon: Curl({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'Designing ElasticSearch Clusers',
    desc:
      'Good ElasticSearch recommendations on designing a cluser(s). And some things to consider before integrating Elastic into your stack',
    url:
      'https://thoughts.t37.net/designing-the-perfect-elasticsearch-cluster-the-almost-definitive-guide-e614eabc1a87/',
    icon: Medium({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
  {
    title: 'Simple Icons',
    desc:
      'The site I am using for the icons you see. It has over 1500 Free SVG icons for popular brands all in one page',
    url: 'https://simpleicons.org/',
    icon: Simpleicons({
      className: 'w-12 h-12  min-w-sm fill-svg',
    }),
  },
]

export default Bookmarks
