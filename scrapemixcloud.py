import subprocess

subprocess.run(["bash", "mixCloudSongData.sh"], stderr=subprocess.PIPE, text=False)
htmlLines = []
with open("mixCloudMetadata.txt", "r") as r:
    for line in r:
        if "\"html\":" in line:
            htmlLines.append(line)
bashList = str(subprocess.check_output(["head", "-1", "mixCloudSongData.sh"])).replace('"', '')
bashList = bashList.split('(')[1].split(')')[0].split(' ')

iframeList = []

for line in htmlLines:
    iframeList.append(line.split('"html":')[1].split(',"author_name"')[0].replace('\\', '').replace('height="120"', 'height="60"').replace('"', '')[1:-1])
dem = []
num = len(iframeList) - len(bashList)
with open("mixCloudTracks.md", "w") as o:
    for k in range(len(bashList)):
        print(iframeList[k + num] + "\n\n")
        this = iframeList[k + num].replace('&amp;hide_cover=1', '')
        #print(iframeList[k + num].replace('&amp;hide_cover=1', '').split(' ') + "\n\n")
        #o.writelines(iframeList[k + num] + "\n")
        thingy = this.split(" ")
        those = []
        for thing in range(len(thingy)):
            edited = ""
            if 0 < thing < 4:
                edited = '"' + thingy[thing].split('=')[1] + '"'
                if thing == 3:
                    edited = thingy[thing][3:][1:].replace("?feed=https%3A%2F%2Fwww.mixcloud.com%2F", "?hide_cover=1&mini=1&feed=%2F")
                    edited = '"' + edited + '"'
                that = thingy[thing].split("=")[0] + "=" + edited
            elif thing == 4:
                edited = '"' + thingy[thing].split('=')[1].split(">")[0] + '"' + "></iframe>"
                that = thingy[thing].split("=")[0] + "=" + edited
            else:
                that = thingy[thing] + edited
            those.append(that)
        thee = ""
        for they in those:
            thee = thee + " " + they
        dem.append(thee)
for i in dem:
    print(i)
