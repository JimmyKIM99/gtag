const handleSearch = () => {
    const input = document.getElementById("searchInput").value.trim();
    if (input !== "") {
        gtag("event", "search_button_clicked", {
            event_category: "engagement",
            event_label: "searchkeyword",
            search_term: input
        });

        alert(`검색어 ${input} 에 대한 검색을 실행하였습니다`)
    }    else {
        alert("검색어를 입력하세요");
    }
};

const viewItem = () => {
    gtag("event", "view_item", {
        category: "IT",
        labels: "promotion_item",
        currency:"KRW",
        value: 100000,
        items: [{
            item_id: "AZ102",
            item_name: "소니-amoox6",
            currency: "KRW",
            price: 1000000,
            quantity: 1,
        }]
    });
    alert("view_item 이벤트 발생")
};

const addToCart = () => {
    gtag("event", "add_to_cart", {
        category: "IT",
        labels: "promotion_item",
        currency:"KRW",
        value: 100000,
        items: [{
            item_id: "AZ102",
            item_name: "소니-amoox6",
            currency: "KRW",
            price: 1000000,
            quantity: 1,
        }]
    });
    alert("add_to_cart 이벤트 발생")
};

const parchase = () => {
    gtag("event", "purchase", {
        category: "IT",
        transaction_id: "A1",
        aftilation : "온라인몰",
        currency:"KRW",
        value: 100000,
        tax: 10000,
        shipping : 3000,
        items: [{
            item_id: "AZ102",
            item_name: "소니-amoox6",
            currency: "KRW",
            price: 1000000,
            quantity: 1,
        }]
    });
    alert("purchase 이벤트 발생")
};