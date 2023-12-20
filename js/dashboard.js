

function setProsuct() {
    let objects = [{id:1,nameProduct:"Iphone 12 Pro Max", price:"1200$", category:"Iphone",amcount:15},
                    {id:2,nameProduct:"Galaxy S23 Ultra", price:"900$", category:"Samsung",amcount:13}, 
                    {id:3,nameProduct:"Iphone X", price:"850$", category:"Iphone",amcount:10},
                    {id:4,nameProduct:"Vivo V27", price:"390$", category:"Vivo",amcount:8},
                    {id:5,nameProduct:"Oppo Reno10", price:"400$", category:"Oppo",amcount:3}]
        let tbody = document.querySelector("tbody");
        // tbody.remove()
        // tbody.document.createElement('tbody')
        let sell = 0
        for (const object of objects) {
            let tr = document.createElement("tr");
            let tdid = document.createElement("td");
            let tdName = document.createElement("td");
            let tdPrice = document.createElement("td");
            let tdAmcount = document.createElement("td");
            let tdCategory = document.createElement("td");
            let tdProgrees = document.createElement("td");
            let arrow1 = document.createElement('i');
            arrow1.className ="material-icons"
            arrow1.textContent = "arrow_downward"
            let arrow2 = document.createElement('i');
            arrow2.className ="material-icons"
            arrow2.textContent = "arrow_upward"

            tdid.textContent = object.id
            tdName.textContent = object.nameProduct
            tdAmcount.textContent = object.amcount
            tdCategory.textContent = object.price
            tdPrice.textContent = object.category
    
            if (sell == 0) {
                tdProgrees.appendChild(arrow1)
            } else {
                tdProgrees.appendChild(arrow2)
            }
    
            tr.appendChild(tdid)
            tr.appendChild(tdName)
            tr.appendChild(tdCategory)
            tr.appendChild(tdPrice)
            tr.appendChild(tdAmcount)
            tr.appendChild(tdProgrees)
    
            tbody.appendChild(tr)
            if (sell == 0) {
                sell = 1
            } else {
                sell = 0
            }
        }
        table.appendChild(tbody)
    }
    
    let h2 = document.querySelectorAll("#stock");
    let table = document.querySelector("table");
    setProsuct()