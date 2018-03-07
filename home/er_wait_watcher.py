
from lxml import html
import requests

from home.models import State, ERWaitTime


def link_data_scraper(link, state, state_ins):
    '''
    Save the hospital name and waiting time in this function with state as primary key
    :param link:
    :param state:
    :return:
    '''
    url = "https://projects.propublica.org{}".format(link)
    page = requests.get(url)
    tree = html.fromstring(page.content)

    all_divs = tree.xpath('//*[@id="isotope-table"]/div')

    for div in all_divs:

        hospital_name = div.xpath('div[1]/a/text()')
        waiting_time = div.xpath('div[2]/span/text()')
        if len(hospital_name) == 0:
            hospital_name = "N/A"
        else:
            hospital_name = hospital_name[0]
        print (hospital_name)

        if len(waiting_time) == 0:
            waiting_time = 'N/A'
        else:
            waiting_time = waiting_time[0]
        print (waiting_time)
        ERWaitTime.objects.create(state=state_ins, er_name=hospital_name, waiting_time=waiting_time)

class ERWaitWatcher():


    def state_scrapper(self):
        '''
        Save the state and waiting time
        :return:
        '''

        page = requests.get("https://projects.propublica.org/emergency")
        tree = html.fromstring(page.content)

        all_div = tree.xpath('//*[@id="isotope-table"]/div')
        for div in all_div:
            #  Save the state and waiting time in one table
            state = div.xpath('div[1]/p[2]/a/text()')
            waiting_time = div.xpath('div[2]/span/text()')

            obj = State.objects.create(state=state[0], waiting_time=waiting_time[0])

            link = div.xpath('div[1]/p[2]/a/@href')
            link_data_scraper(link[0], state, obj)



