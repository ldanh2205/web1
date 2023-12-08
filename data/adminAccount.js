var adminAcc = [
    {
        "username": 'ldanh',
        "password": 12345,
        "name": "Lê Đức Anh",
        "email": "ldanh@12345"
    },
    {
        "username": 'vchao',
        "password": 45678,
        "name": "Văn Cẩm Hào",
        "email": "vchao@45678"
    },
    {
        "username": 'thbao',
        "password": 56789,
        "name": "Trần Hoài Bảo",
        "email": "thbao@56789"
    },
    {
        "username": 'bhquang',
        "password": 78910,
        "name": "Bùi Hữu Quang",
        "email": "bhquang@78910"
    },
    {
        "username": 'nhan',
        "password": 98765,
        "name": "Nguyễn Hồng Ân",
        "email": "nhan@78910"
    }
]
localStorage.setItem('adminAcc', JSON.stringify(adminAcc));

var adminStatus = [false, ''];//dòng này sao?
localStorage.setItem('adminStatus', JSON.stringify(adminStatus));