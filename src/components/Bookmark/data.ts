import {
  Cloudflare,
  Dropbox,
  Github,
  Go,
  Mozilla,
  Mysql,
  Nginx,
} from '@/components/Icons'

const Bookmarks = [
  {
    title: 'NGINX thread pooling',
    desc:
      'Interesting read about NGINX thread pools, seems like it could benefit serving static content static content',
    url: 'https://www.nginx.com/blog/thread-pools-boost-performance-9x/',
    icon: Nginx({
      className: 'md:w-10 md:h-10 w-8 h-8 min-w-sm fill-current',
    }),
  },
  {
    title: 'moz://a SSL generator',
    desc:
      'Sane SSL config generator for most web servers and load balancers, I recommend the intermediate config',
    url: 'https://ssl-config.mozilla.org/',
    icon: Mozilla({
      className: 'md:w-10 md:h-10 w-8 h-8 min-w-sm fill-current',
    }),
  },
  {
    title: 'Golang: pipelines and cancellation',
    desc:
      'A big fundamental part of Golang is concurrency & parallelism, this explains in depth about some of the techniques used to achieve that',
    url: 'https://blog.golang.org/pipelines',
    icon: Go({
      className: 'md:w-10 md:h-10 w-8 h-8 min-w-sm fill-svg',
    }),
  },
  {
    title: 'MySQL behaviour with swap and NUMA',
    desc:
      'Detailed article about unpredictable performance and random delays on MySQL when dealing with swap and NUMA',
    url:
      'https://blog.jcole.us/2010/09/28/mysql-swap-insanity-and-the-numa-architecture/',
    icon: Mysql({
      className: 'md:w-10 md:h-10 w-8 h-8 min-w-sm fill-svg',
    }),
  },
  {
    title: 'High throughput and low latency web servers',
    desc:
      'From Dropbox engineer, a must read article for infrastructure engineers, about NGINX high-throughput, reliability, performance, and efficiency',
    url:
      'https://thoughts.t37.net/designing-the-perfect-elasticsearch-cluster-the-almost-definitive-guide-e614eabc1a87/',
    icon: Dropbox({
      className: 'md:w-10 md:h-10 w-8 h-8 min-w-sm fill-svg',
    }),
  },
  {
    title: 'Understanding Origin Cache-Control',
    desc:
      'To use Cloudflare caching mechanism with efficiency, You need to fully understand how Cloudflare deals with Cache-Control headers',
    url: 'https://support.cloudflare.com/hc/en-us/articles/115003206852',
    icon: Cloudflare({
      className: 'md:w-10 md:h-10 w-8 h-8 min-w-sm fill-svg',
    }),
  },
  {
    title: 'Nginx HTTP server boilerplate configs',
    desc:
      'Out of the box optimized and sane configuration for NGINX, explained and documented',
    url: 'https://github.com/h5bp/server-configs-nginx',
    icon: Github({
      className: 'md:w-10 md:h-10 w-8 h-8 min-w-sm fill-svg',
    }),
  },
]

export default Bookmarks
