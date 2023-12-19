

let objects = ["we", 'er', 'gerg', 'gter', 'gerg']

function setProsuct() {
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

        tdid.textContent = object
        tdName.textContent = '1234567'
        tdPrice.textContent = '1234567'
        tdAmcount.textContent = '1234567'
        tdCategory.textContent = '1234567'

        console.log(arrow1);
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