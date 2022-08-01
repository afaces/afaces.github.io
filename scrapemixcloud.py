
import subprocess

subprocess.run(["bash", "mixCloudSongData.sh"], stderr=subprocess.PIPE, text=True)
htmlLines = []
with open("mixCloudMetadata.txt", "r") as r:
    for line in r:
        print("hola mama ", line)
        if "\"html\":" in line:
            htmlLines.append(line)
bashList = str(subprocess.check_output(["head", "-1", "mixCloudSongData.sh"])).replace('"', '')
bashList = bashList.split('(')[1].split(')')[0].split(' ')

iframeList = []

for line in htmlLines:
    iframeList.append(line.split('"html":')[1].split(',"author_name"')[0].replace('\\', '').replace('height="120"', 'height="60"').replace('"', '')[1:-1])

#print(len(iframeList))

with open("mixCloudTracks.md", "w") as o:
    for k in range(len(bashList)):
        o.writelines(iframeList[k]+ "\n")