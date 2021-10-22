import { VALUECARD } from "./constants"


export const diffArrays =(arr1, arr2)=>{
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
        if(arr1[i]!==arr2[i]){
            return false
        }
    }
    return true
}

export const checkDevice = () =>{
    const tabletWidth = 1280;
    const mobileWidth = 768;
    const windowWidth = window.innerWidth;
    if(windowWidth >= tabletWidth){
        return VALUECARD.desktop
    }

    else if(windowWidth < tabletWidth && windowWidth >= mobileWidth){
        return VALUECARD.tablet
    }

    else if(windowWidth < mobileWidth){
        return VALUECARD.mobile
    }
}

export const timeCalc = (duration) =>{
    return [Math.floor(duration/60), Math.floor(duration%60)]
}

