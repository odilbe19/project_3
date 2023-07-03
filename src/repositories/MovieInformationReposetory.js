import {ContinueApi, InfoApi , JustApi, LikesApi, PartnersApi ,PopularApi, WatchlistApi} from "./Reposetory";
import axios from "axios";
class Info_list {
    getInfoList(){
        const InfoList = axios.get(InfoApi)
        .then(res => {
            return res.data
        })
            .catch(err => {
                return err
            })

        return InfoList
    }
    getPartnersList(){
        const PartnersList = axios.get(PartnersApi)
        .then(res => {
            return res.data
        })
            .catch(err => {
                return err
            })
        return PartnersList
    }
    getContinueList(){
        const ContinueList = axios.get(ContinueApi)
        .then(res => {
            return res.data
        })
            .catch(err => {
                return err
            })
        return ContinueList
    }
    getPopularList(){
        const PopularList = axios.get(PopularApi)
        .then(res => {
            return res.data
        })
            .catch(err => {
                return err
            })
        return PopularList
    }
    getJustList(){
        const JustList = axios.get(JustApi)
        .then(res => {
            return res.data
        })
            .catch(err => {
                return err
            })
        return JustList
    }
    getWatchlistList(){
        const WathclistList = axios.get(WatchlistApi)
        .then(res => {
            return res.data
        })
            .catch(err => {
                return err
            })
        return WathclistList
    }
    getLikesList(){
        const LikesList = axios.get(LikesApi)
        .then(res => {
            return res.data
        })
            .catch(err => {
                return err
            })
        return LikesList
    }

}


export default new Info_list()