#include <stdio.h>
#include <stdlib.h>
#include <string.h>

typedef struct DiemSinhVienNode {
    char MaSo[10];
    char HoTen[50];
    float Diem;
    struct DiemSinhVienNode *next;
} DiemSinhVienNode;

typedef struct {
    DiemSinhVienNode *head;
} BangDiemList;

int main() {
    BangDiemList bangDiem;
    bangDiem.head = NULL;
    int luaChon;

    do {
        printf("1. Them Diem sinh vien moi vao vi tri dau.\n");
        printf("2. Sua diem theo Ho ten sinh vien.\n");
        printf("3. Sap xep Bang diem theo Diem giam dan.\n");
        printf("0. Thoat chuong trinh.\n");
        printf("Nhap lua chon cua ban: ");
        scanf("%d", &luaChon);
        getchar();

        if (luaChon == 1) {
            int soLuong;
            printf("Nhap so luong Diem sinh vien them moi: ");
            scanf("%d", &soLuong);
            getchar();

            for (int i = 0; i < soLuong; ++i) {
                DiemSinhVienNode *nodeMoi = (DiemSinhVienNode *)malloc(sizeof(DiemSinhVienNode));
                printf("Nhap MaSo: ");
                gets(nodeMoi->MaSo);
                printf("Nhap HoTen: ");
                gets(nodeMoi->HoTen);
                printf("Nhap Diem: ");
                scanf("%f", &nodeMoi->Diem);
                getchar();

                nodeMoi->next = bangDiem.head;
                bangDiem.head = nodeMoi;
            }

            printf("Da them %d sinh vien moi.\n", soLuong);
        } else if (luaChon == 2) {
            char hoTen[50];
            printf("Nhap Ten sinh vien can sua: ");
            gets(hoTen);

            DiemSinhVienNode *hienTai = bangDiem.head;
            while (hienTai != NULL) {
                if (strcmp(hienTai->HoTen, hoTen) == 0) {
                    printf("Nhap diem moi cho sinh vien %s: ", hoTen);
                    scanf("%f", &hienTai->Diem);
                    getchar();
                    printf("Da sua diem cho sinh vien %s.\n", hoTen);
                    break;
                }
                hienTai = hienTai->next;
            }

            if (hienTai == NULL) {
                printf("Khong tim thay sinh vien co ten %s.\n", hoTen);
            }
        } else if (luaChon == 3) {
            if (bangDiem.head == NULL || bangDiem.head->next == NULL) {
                continue;
            }

            DiemSinhVienNode *sorted = NULL;

            while (bangDiem.head != NULL) {
                DiemSinhVienNode *hienTai = bangDiem.head;
                bangDiem.head = bangDiem.head->next;

                if (sorted == NULL || hienTai->Diem >= sorted->Diem) {
                    hienTai->next = sorted;
                    sorted = hienTai;
                } else {
                    DiemSinhVienNode *temp = sorted;
                    while (temp->next != NULL && temp->next->Diem > hienTai->Diem) {
                        temp = temp->next;
                    }
                    hienTai->next = temp->next;
                    temp->next = hienTai;
                }
            }

            bangDiem.head = sorted;
            printf("Da sap xep bang diem theo diem giam dan.\n");
        } else if (luaChon == 0) {
            printf("Thoat chuong trinh.\n");
        } else {
            printf("Lua chon khong hop le. Vui long chon lai.\n");
        }
    } while (luaChon != 0);

    DiemSinhVienNode *hienTai = bangDiem.head;
    while (hienTai != NULL) {
        DiemSinhVienNode *temp = hienTai;
        hienTai = hienTai->next;
        free(temp);
    }

    return 0;
}

