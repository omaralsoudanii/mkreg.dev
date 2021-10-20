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
