import pandas as pd
import json

def save_to_json(csv, name, *columns):
  my_json = {}
  for column in columns:
    my_json[column] = []

  for index, row in csv.iterrows():
    for index, column in enumerate(columns):
      row_to_append = row[column]
      if (index == 0):
        row_to_append = int(row[column])
      else:
        try:
          row_to_append = float(row[column])
        except:
          row_to_append = float(row[column].replace(',', ''))
      # print(type(row_to_append))
      my_json[column].append(row_to_append)

  with open('json/' + name + '.json', 'w') as f:
    json.dump(my_json, f)

if __name__ == '__main__':
  name = 'งบต่อปี'
  csv = pd.read_csv(name + '.csv')
  save_to_json(csv, name, 'ปี', 'งบประมาณรายจ่ายด้านการศึกษา')

  name = 'จำนวนนักเรียน'
  csv = pd.read_csv(name + '.csv')
  save_to_json(csv, name, 'ปี',
    'ก่อนประถมศึกษา', 'เฉลี่ยประถมต้น-ปลาย', 'มัธยมศึกษาตอนต้น',
    'มัธยมศึกษาตอนปลาย', 'ปริญญาตรีและต่ำกว่า')

  name = 'จำนวนครู'
  csv = pd.read_csv(name + '.csv')
  save_to_json(csv, name, 'ปี', 'ครู ภูมิภาค')

  name = 'จำนวนสถานศึกษา'
  csv = pd.read_csv(name + '.csv')
  save_to_json(csv, name, 'ปี', 'จำนวนสถานศึกษา')


