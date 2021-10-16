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
        return [12,3]
    }

    else if(windowWidth < tabletWidth && windowWidth >= mobileWidth){
        return [8,2]
    }

    else if(windowWidth < mobileWidth){
        return [5,2]
    }
}

export const timeCalc = (duration) =>{
    return [Math.floor(duration/60), Math.floor(duration%60)]
}

