import Vue from 'vue'

import * as types from './mutation-type'
import * as ls from 'util/localstorage'

export default {
    [types.ADD_FEED] (state, feed) {
        feed.forEach(f => state.feedList.push(f))

        ls.set('feeds', state.feedList)
    },

    [types.DELETE_FEED] (state, id) {
        Vue.set(state, 'feedList', state.feedList.filter(f => f.id !== id))

        ls.set('feeds', state.feedList)
    },

    [types.UPDATE_CONFIG] (state, cfg) {
        Object.assign(state.config, cfg)

        ls.set('config', state.config)
    },

    [types.SET_FEEDLIST] (state, rss) {
        ls.set(rss.id, {
            list: rss.items,
            _t: +new Date()
        })
    }
}
