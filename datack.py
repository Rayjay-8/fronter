import dropbox


dbx = dropbox.Dropbox('NHMfmVZe82AAAAAAAAAAXJl2rEJ6ScMsGfUKm7PQ60uzpmkryPHPCb6ysrqltSqy')

#print(dbx.users_get_current_account())

#for entry in dbx.files_list_folder('').entries:
    #print(entry.name)


#dbx.files_upload("Potential headline: Game 5 a nail-biter as Warriors inch out Cavs", '/up.png')

dbx.files_upload(open("up.png", "rb").read(), "/DATACK - API - SCRIPTS/cat1.png")
print("[UPLOADED] {}")
