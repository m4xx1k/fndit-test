import { CronJob } from 'cron'
import { parseRss } from '../services/rssParser.service'

export const parseRssJob = new CronJob('* * * * *', parseRss)
