export function exportCSVFile(headers,totalData,fileTitle){

    if(!totalData || !totalData.length){
        return null
    }
    const jsonObject = JSON.stringify(totalData)
    const result = covertToCSV(jsonObject, headers)
    if(!result){
        return null
    }
    const blob = new Blob([result])
    const exportedFileName = fileTitle ? fileTitle+'.csv':'export.csv'
    if(navigator.msSaveBlob){
        navigator.msSaveBlob(blob, exportedFileName)
    }else if(navigator.userAgent.match(/iPhone|iPad|iPod/i)){
        const link = window.document.createElement('a')
        link.href='data:text/csv;charset=utf-8,' + encodeURI(result);
        link.target = '_blank'
        link.download=exportedFileName
        link.click()
    }else{
        const link = window.document.createElement('a')
        if(link.download !== undefined){
            const url = URL.createObjectURL(blob)
            link.setAttribute('href', url)
            link.setAttribute('download', exportedFileName)
            link.style.visibility='hidden'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
        }
    }
}

function covertToCSV(objArray, headers){
    const columnDelimeter = ','
    const lineDelimeter = '\r\n'
    const actualHeaderKey = Object.keys(headers)
    const headerToShow = Object.values(headers)
    let str = ''
    str += headerToShow.join(columnDelimeter)
    str += lineDelimeter
    const data = typeof objArray !== 'object' ? JSON.parse(objArray):objArray
    data.forEach(obj => {
        let line = ''
        actualHeaderKey.forEach(key=>{
            if(line != ''){
                line+=columnDelimeter
            }
            let strItem = obj[key]+''
            line+=strItem ? strItem.replace(/,/g, ''):strItem
        })
        str+=line+lineDelimeter
    })
    return str
}