const posts = {
    1: {
        title: "5 Tips for First-Time Buyers",
        content: "Here are 5 essential tips: Get pre-approved, set a budget, research neighborhoods, inspect thoroughly, and negotiate smartly."
    },
    2: {
        title: "Land Investment: Pros & Cons",
        content: "Pros include long-term value and low maintenance. Cons include zoning issues and slow returns. Do your homework!"
    },
    3: {
        title: "Renting vs Buying",
        content: "Renting offers flexibility; buying builds equity. Evaluate your finances and goals before deciding."
    },
    4: {
        title: "How to Stage Your Home for Sale",
        content: "Declutter, deep clean, add neutral decor, and enhance lighting to make your home more appealing to buyers."
    },
    5: {
        title: "Understanding Property Taxes",
        content: "Property taxes vary by location and fund local services. Know the rates, due dates, and how assessments are done."
    },
    6: {
        title: "Real Estate Auctions Explained",
        content: "Auctions can offer great deals but move quickly. Understand bidding rules, financing requirements, and terms before joining."
    },
    7: {
        title: "Top Renovations That Add Value",
        content: "Kitchen and bathroom remodels, curb appeal, and energy-efficient upgrades are top choices to boost your home’s value."
    },
    8: {
        title: "How to Pick the Right Neighborhood",
        content: "Look for good schools, safety, amenities, commute times, and future development plans when choosing where to live."
    },
    9: {
        title: "What to Expect During Closing",
        content: "Expect final inspections, document signings, closing costs, and official transfer of ownership on the closing day."
    }
};


function viewPost(id) {
    document.getElementById("post-title").textContent = posts[id].title;
    document.getElementById("post-content").textContent = posts[id].content;
    document.getElementById("post-view").style.display = "block";
}

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("comment-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const comment = document.getElementById("comment").value.trim();
        const commentBox = document.getElementById("comment-list");

        if (name && comment) {
            const p = document.createElement("p");
            p.innerHTML = `<strong>${escapeHTML(name)}:</strong> ${escapeHTML(comment)}`;
            commentBox.appendChild(p);
            form.reset();
        } else {
            alert("Please enter both name and comment.");
        }
    });

    function escapeHTML(str) {
        return str.replace(/[&<>"']/g, function (match) {
            const escape = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;'
            };
            return escape[match];
        });
    }
});